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
   PUENTE DETALLADO
========================= */
function dibujarPuente() {

    ctx.strokeStyle = "#cccccc";
    ctx.lineWidth = 4;

    // Base
    ctx.beginPath();
    ctx.moveTo(0, 260);
    ctx.lineTo(canvas.width, 260);
    ctx.stroke();

    // Torres
    ctx.fillStyle = "#555";
    ctx.fillRect(250, 150, 50, 110);
    ctx.fillRect(600, 150, 50, 110);

    // Cables principales
    ctx.beginPath();
    ctx.moveTo(275, 150);
    ctx.quadraticCurveTo(450, 100, 625, 150);
    ctx.stroke();

    // Cables verticales
    for (let i = 275; i <= 625; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 260);
        ctx.lineTo(i, 160);
        ctx.stroke();
    }
}

/* =========================
   FAROLES DEL PUENTE
========================= */
function dibujarFaroles() {
    for (let i = 50; i < canvas.width; i += 80) {
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(i, 250, 6, 0, Math.PI * 2);
        ctx.fill();
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