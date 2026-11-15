// Mehrsprachigkeit: alle Texte des Spiels kommen aus diesen Wörterbüchern.
import de from './de.js';
import en from './en.js';
import fr from './fr.js';
import es from './es.js';
import it from './it.js';
import tr from './tr.js';

export const LANGS = { de, en, fr, es, it, tr };
let cur = 'de';

export function detectLang() {
  try { const s = localStorage.getItem('lumi_lang'); if (s && LANGS[s]) return s; } catch (e) { /* egal */ }
  for (const l of navigator.languages || [navigator.language || 'de']) {
    const k = String(l).slice(0, 2).toLowerCase();
    if (LANGS[k]) return k;
  }
  return 'en';
}
export function setLang(l) { if (LANGS[l]) { cur = l; try { localStorage.setItem('lumi_lang', l); } catch (e) { /* egal */ } document.documentElement.lang = l; } }
export function getLang() { return cur; }
export function dict() { return LANGS[cur]; }

// t('ui.cleared', { name: 'X' }) – fällt auf Deutsch zurück, falls ein Text fehlt
export function t(key, params) {
  const get = (o) => key.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  let v = get(LANGS[cur]);
  if (v == null) v = get(LANGS.de);
  if (v == null) return key;
  if (typeof v === 'string' && params) v = v.replace(/\{(\w+)\}/g, (_, k) => (params[k] ?? ''));
  return v;
}
