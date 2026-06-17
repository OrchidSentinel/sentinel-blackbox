# sentinel-blackbox

Content des **„Blackbox"-Tablets** — ein mehrseitiges Terminal-/Puzzle-Interface
(NEXUS-Blackbox: Kommando-Terminal mit Passwort-Gates über mehrere Stufen).

**Reiner Content** (HTML/CSS/JS), doppelt nutzbar aus einer Quelle:

1. **Website** über GitHub Pages.
2. **In-Game** als Tablet — eingebunden als Git-Submodule der Sammel-Resource
   **`BIRP_Tablets`** (`OrchidSentinel/BIRP_Tablet`), die Rahmen, NUI-Focus,
   Öffnen/Schließen und das ox_inventory-Item (`blackbox_tablet`) stellt.

## Seiten

Einstieg: **`index.html`** (Kommando-Terminal). Linearer Pfad über relative
Navigation, gesteuert durch `script.js` (`runCommand`, `checkPassword`):

```
index ──(Kommando "observe")──► access ──► sentinel ──► initiative ──► fib ──► final
```

| Datei             | Inhalt                                   |
|-------------------|------------------------------------------|
| `index.html`      | Einstieg / Kommando-Terminal             |
| `access.html`     | Zugriffsstufe                            |
| `sentinel.html`   | Stufe                                    |
| `initiative.html` | Stufe                                    |
| `fib.html`        | Stufe                                    |
| `final.html`      | Endseite                                 |
| `script.js`       | Terminal-Kommandos + Passwort-Logik      |
| `style.css`       | Styling                                  |

## Im Spiel

Kein eigener Code nötig — `BIRP_Tablets` lädt `index.html` in den Tablet-Rahmen.
Änderungen hier landen nach `git submodule update --remote` direkt im Spiel.
Schließen: **ESC** oder **DISCONNECT**.

## Regeln für Änderungen (Entwickler & KI)

Damit es im Spiel-iframe **und** auf GitHub Pages funktioniert:

1. **Nur reiner Content** (HTML/CSS/JS/Assets) — **kein** `fxmanifest.lua`,
   `client.lua`, `nui.js` oder sonstige FiveM-Glue.
2. **Einstieg bleibt `index.html`** im Root.
3. **Nur relative Links/Assets** (`seite.html`, nicht `/seite.html`); auch
   `location.href` in `script.js` relativ halten.
4. **Muss standalone im Browser laufen** — nicht auf die Hülle verlassen.
5. **Kein `cfx-nui-<name>`** hartkodieren; falls je nötig: `GetParentResourceName()`.
6. **Keine eigene Schließen-/Focus-Logik** — das macht `BIRP_Tablets`.

Gesamtarchitektur: siehe README von `OrchidSentinel/BIRP_Tablet`.
