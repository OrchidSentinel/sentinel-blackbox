const canvas = document.getElementById("matrix");
if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "01SENTINELORCHIDFIBINITIATIVE";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(2, 4, 3, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#18ff78";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 45);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

if (terminalInput && terminalOutput) {
  terminalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = terminalInput.value.trim().toLowerCase();
      terminalInput.value = "";
      runCommand(command);
    }
  });
}

function runCommand(command) {
  if (command === "help") {
    terminalOutput.textContent =
`Befehle:
help        zeigt Befehle
scan        sucht offene Sentinel-Pfade
login       startet Zugriff
orchid      prüft Maskierung
fib         sucht Behördenkopien`;
  } else if (command === "scan") {
    terminalOutput.textContent =
`SCAN COMPLETE.

Gefundene Pfade:
[01] /external
[02] /access
[03] /initiative
[04] /fib_mirror

Erster offener Zugriff:
access.html`;
  } else if (command === "login") {
    terminalOutput.textContent =
`LOGIN FAILED.
Grund: Benutzer unbekannt.

Alternative Route erkannt:
ORCHiD-MASK-LAYER aktiv.

Weiterleitung vorbereitet:
Gib "access" ein.`;
  } else if (command === "access") {
    window.location.href = "access.html";
  } else if (command === "orchid") {
    terminalOutput.textContent =
`ORCHiD LAYER ACTIVE.

Du bist nicht unsichtbar.
Du bist nur schwerer zu finden.`;
  } else if (command === "fib") {
    terminalOutput.textContent =
`FIB MIRROR NODE: DETECTED.
Zugriff verweigert.
Vorherige Sentinel-Schicht erforderlich.`;
  } else {
    terminalOutput.textContent =
`UNKNOWN COMMAND: ${command}

Sentinel hat diesen Versuch protokolliert.`;
  }
}

function checkPassword(correctPassword, nextPage) {
  const input = document.getElementById("pagePassword");
  const error = document.getElementById("error");

  if (!input) return;

  const value = input.value.trim().toLowerCase();

  if (value === correctPassword.toLowerCase()) {
    window.location.href = nextPage;
  } else {
    if (error) {
      error.textContent = "ACCESS DENIED // Versuch wurde protokolliert.";
    }

    input.value = "";
  }
}
