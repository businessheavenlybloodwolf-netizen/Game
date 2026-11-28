// Game State Integration von Valve (CS2, Dota 2). Das Spiel schickt seinen
// Zustand selbst per HTTP an die Bridge. Offizielle Schnittstelle, kein
// Eingriff ins Spiel, daher unbedenklich bei Anti-Cheat (VAC).

export function cs2(engine) {
  let lastHp = null;
  return (data) => {
    const p = data.player;
    const me = data.provider?.steamid;
    // Nur reagieren, wenn der Spieler selbst gemeint ist (nicht beim Zuschauen).
    if (!p?.state || !me || p.steamid !== me) {
      lastHp = null;
      engine.setHealth(null);
      return;
    }
    const hp = p.state.health;
    if (lastHp != null && hp < lastHp) {
      engine.trigger({ type: hp === 0 ? 'death' : 'damage', amount: lastHp - hp, max: 100, source: 'CS2' });
    }
    lastHp = hp;
    engine.setHealth(hp > 0 ? hp / 100 : null);
  };
}

export function dota2(engine) {
  let lastHp = null;
  let wasAlive = null;
  return (data) => {
    const h = data.hero;
    if (!h || h.health == null) {
      lastHp = null; wasAlive = null;
      engine.setHealth(null);
      return;
    }
    const max = h.max_health || 1;
    if (wasAlive && h.alive === false) {
      engine.trigger({ type: 'death', source: 'Dota 2' });
    } else if (lastHp != null && h.health < lastHp && h.alive) {
      engine.trigger({ type: 'damage', amount: lastHp - h.health, max, source: 'Dota 2' });
    }
    lastHp = h.health;
    wasAlive = h.alive;
    engine.setHealth(h.alive ? h.health / max : null);
  };
}
