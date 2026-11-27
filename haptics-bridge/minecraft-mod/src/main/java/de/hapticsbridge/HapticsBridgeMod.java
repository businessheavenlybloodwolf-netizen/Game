package de.hapticsbridge;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Locale;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientTickEvents;
import net.minecraft.client.Minecraft;
import net.minecraft.client.player.LocalPlayer;

/**
 * Nur auf dem Client: vergleicht jede Spielsekunde 20-mal die eigenen Lebenspunkte
 * (inklusive Absorptionsherzen) und meldet Schaden und Tod an die Haptics Bridge.
 * Funktioniert in Einzelspieler und auf Servern, ohne dass der Server die Mod braucht.
 */
public class HapticsBridgeMod implements ClientModInitializer {
    private static final URI URL = URI.create(System.getProperty("hapticsbridge.url", "http://127.0.0.1:3110/event"));
    private static final String TOKEN = System.getProperty("hapticsbridge.token", "");
    private static final HttpClient HTTP = HttpClient.newBuilder().connectTimeout(Duration.ofMillis(500)).build();

    private float lastHp = -1;
    private float lastReported = -1;
    private boolean wasDead = false;

    @Override
    public void onInitializeClient() {
        ClientTickEvents.END_CLIENT_TICK.register(this::tick);
    }

    private void tick(Minecraft mc) {
        LocalPlayer p = mc.player;
        if (p == null) {
            lastHp = -1;
            wasDead = false;
            return;
        }
        float hp = p.getHealth() + p.getAbsorptionAmount();
        float max = p.getMaxHealth();
        boolean dead = p.isDeadOrDying();

        if (dead && !wasDead) {
            send("{\"type\":\"death\",\"source\":\"Minecraft\"}");
        } else if (!dead && lastHp >= 0 && hp < lastHp - 0.01f) {
            send(String.format(Locale.ROOT, "{\"type\":\"damage\",\"amount\":%.2f,\"max\":%.2f,\"source\":\"Minecraft\"}", lastHp - hp, max));
        }

        // Aktuelle Lebensanteile melden (für den Herzschlag bei wenig Leben); tot = unbekannt.
        float frac = dead ? -1f : Math.min(1f, p.getHealth() / max);
        if (Math.abs(frac - lastReported) >= 0.02f) {
            lastReported = frac;
            send(dead ? "{\"type\":\"health\",\"value\":null}"
                      : String.format(Locale.ROOT, "{\"type\":\"health\",\"value\":%.3f}", frac));
        }

        lastHp = hp;
        wasDead = dead;
    }

    private static void send(String json) {
        HttpRequest req = HttpRequest.newBuilder(URL)
            .timeout(Duration.ofSeconds(1))
            .header("Content-Type", "application/json")
            .header("X-Token", TOKEN)
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
        // Asynchron, damit das Spiel nie wartet. Läuft die Bridge nicht, passiert einfach nichts.
        HTTP.sendAsync(req, HttpResponse.BodyHandlers.discarding()).exceptionally(e -> null);
    }
}
