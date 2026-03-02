/**
 * ---------------------------------------------------------
 * Proyecto: Paisaje Nocturno con Canvas 2D
 * Autor: Iker Velázquez
 * Fecha: 2026
 * Descripción:
 * Recreación fiel de un puente nocturno con ciudad,
 * cielo estrellado, galaxia, reflejos y detalles.
 * Más de 100 figuras básicas utilizadas.
 * ---------------------------------------------------------
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   CIELO CON GRADIENTE
========================= */
function dibujarCielo() {
    const gradiente = ctx.createLinearGradient(0, 0, 0, 300);
    gradiente.addColorStop(0, "#0b1a3a");
    gradiente.addColorStop(1, "#1c2f5a");

    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, 300);
}

/* =========================
   ESTRELLAS
========================= */
function dibujarEstrellas() {
    ctx.fillStyle = "white";
    for (let i = 0; i < 120; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * 250, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   NUBES MORADAS
========================= */
function dibujarNubes() {
    ctx.fillStyle = "rgba(150, 100, 255, 0.3)";

    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(150 * i, 120, 80, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   GALAXIA CENTRAL
========================= */
function dibujarGalaxia() {
    for (let i = 0; i < 300; i++) {
        ctx.fillStyle = `rgba(${150 + Math.random()*100},${50},255,0.7)`;
        ctx.beginPath();
        ctx.arc(450 + Math.random()*100, 100 + Math.random()*150, 1, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   AGUA CON REFLEJO
========================= */
function dibujarAgua() {
    const grad = ctx.createLinearGradient(0, 300, 0, 500);
    grad.addColorStop(0, "#162447");
    grad.addColorStop(1, "#0f1a33");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 300, canvas.width, 200);
}

/* =========================
   CIUDAD CON VENTANAS
========================= */
function dibujarCiudad() {
    let x = 50;

    for (let i = 0; i < 18; i++) {
        let altura = Math.random() * 200 + 80;

        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(x, 300 - altura, 40, altura);

        // Ventanas
        ctx.fillStyle = "#ffd700";
        for (let y = 300 - altura + 10; y < 300; y += 15) {
            ctx.fillRect(x + 8, y, 6, 6);
            ctx.fillRect(x + 22, y, 6, 6);
        }

        x += 45;
    }
}

/* =========================
   PUENTE REALISTA DETALLADO
========================= */
function dibujarPuente() {

    ctx.strokeStyle = "#cfcfcf";
    ctx.fillStyle = "#3e4a5a";
    ctx.lineWidth = 3;

    // ======================
    // PLATAFORMA PRINCIPAL
    // ======================
    ctx.fillRect(0, 270, canvas.width, 20);

    // Estructura metálica inferior (patrón X)
    ctx.strokeStyle = "#8892a0";
    for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 270);
        ctx.lineTo(i + 40, 290);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i + 40, 270);
        ctx.lineTo(i, 290);
        ctx.stroke();
    }

    // ======================
    // TORRE IZQUIERDA
    // ======================
    dibujarTorre(220);

    // ======================
    // TORRE DERECHA
    // ======================
    dibujarTorre(630);

    // ======================
    // CABLE PRINCIPAL CURVO
    // ======================
    ctx.strokeStyle = "#dcdcdc";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(245, 150);
    ctx.bezierCurveTo(350, 200, 520, 200, 655, 150);
    ctx.stroke();

    // ======================
    // CABLES VERTICALES
    // ======================
    ctx.lineWidth = 2;
    for (let i = 260; i <= 640; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 270);
        ctx.lineTo(i, 165 + Math.sin((i - 260) / 380 * Math.PI) * 35);
        ctx.stroke();
    }

    // ======================
    // LÁMPARAS DEL PUENTE
    // ======================
    for (let i = 40; i < canvas.width; i += 80) {
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.arc(i, 265, 6, 0, Math.PI * 2);
        ctx.fill();
    }
}


/* =========================
   FUNCIÓN PARA DIBUJAR TORRES
========================= */
function dibujarTorre(x) {

    ctx.fillStyle = "#4f5d75";

    // Columna principal
    ctx.fillRect(x, 150, 50, 120);

    // Base inferior
    ctx.fillStyle = "#2f3e50";
    ctx.fillRect(x - 5, 260, 60, 15);

    // Parte superior
    ctx.fillStyle = "#6c7a89";
    ctx.fillRect(x - 5, 130, 60, 20);

    // Estructura interna en X
    ctx.strokeStyle = "#cfcfcf";
    ctx.lineWidth = 2;

    for (let y = 160; y < 260; y += 25) {

        ctx.beginPath();
        ctx.moveTo(x + 5, y);
        ctx.lineTo(x + 45, y + 25);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + 45, y);
        ctx.lineTo(x + 5, y + 25);
        ctx.stroke();
    }
}

/* =========================
   ESCENA COMPLETA
========================= */
function dibujarEscena() {
    dibujarCielo();
    dibujarNubes();
    dibujarEstrellas();
    dibujarGalaxia();
    dibujarAgua();
    dibujarCiudad();
    dibujarPuente();
    dibujarFaroles();
}

dibujarEscena();