-- Haptics Bridge für Garry's Mod
-- Schreibt Schaden, Tod und Lebenspunkte des eigenen Spielers nach
-- garrysmod/data/haptics_bridge.txt. Die Haptics Bridge liest diese Datei mit.
-- Läuft im Einzelspieler und auf einem Server, den du selbst im Spiel hostest.

if not SERVER then return end

local FILE = "haptics_bridge.txt"
file.Write(FILE, "") -- bei jedem Kartenstart leeren

local function isMe(ply)
	return IsValid(ply) and ply:IsPlayer() and (game.SinglePlayer() or ply:IsListenServerHost())
end

local function out(line)
	file.Append(FILE, line .. "\n")
end

local lastHealth = nil
local function reportHealth(ply)
	local max = math.max(ply:GetMaxHealth(), 1)
	local frac = ply:Alive() and math.Clamp(ply:Health() / max, 0, 1) or -1
	if lastHealth == nil or math.abs(frac - lastHealth) >= 0.02 then
		lastHealth = frac
		out(string.format("HB health %.3f", frac))
	end
end

hook.Add("PlayerHurt", "HapticsBridge", function(ply, attacker, healthRemaining, damageTaken)
	if not isMe(ply) or damageTaken <= 0 then return end
	out(string.format("HB damage %.1f %d", damageTaken, math.max(ply:GetMaxHealth(), 1)))
	reportHealth(ply)
end)

hook.Add("PostPlayerDeath", "HapticsBridge", function(ply)
	if not isMe(ply) then return end
	out("HB death")
	reportHealth(ply)
end)

-- Heilung (Medkits, Regeneration) und Respawn regelmäßig nachtragen.
timer.Create("HapticsBridgeHealth", 0.5, 0, function()
	for _, ply in ipairs(player.GetHumans()) do
		if isMe(ply) then reportHealth(ply) end
	end
end)

print("[Haptics Bridge] aktiv, schreibt nach garrysmod/data/" .. FILE)
