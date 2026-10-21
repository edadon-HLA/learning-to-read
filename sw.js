/* This address moved to https://eldar1234334.github.io/SpellQuest-AlphaBet/ . This file only removes the old saved copy of the game from the browser and then removes itself. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  try { for (const k of await caches.keys()) await caches.delete(k); } catch (x) {}
  try { await self.registration.unregister(); } catch (x) {}
  try { const cs = await self.clients.matchAll({ type: 'window' }); cs.forEach(c => { try { c.navigate(c.url); } catch (x) {} }); } catch (x) {}
})()));
