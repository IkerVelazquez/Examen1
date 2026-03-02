/**
 * ---------------------------------------------------------
 * Proyecto: Paisaje Nocturno con Canvas 2D
 * Autor: Iker Velázquez
 * Fecha: 2026
 * Descripción:
 * Aplicación que recrea un paisaje nocturno con puente y ciudad
 * utilizando la API Canvas 2D con más de 30 figuras básicas.
 * ---------------------------------------------------------
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   FUNCIONES PRINCIPALES
========================= */

function dibujarCielo() {
    ctx.fillStyle = "#0d1b2a";
    ctx.fillRect(0, 0, 800, 250);
}

function dibujarEstrellas() {
    ctx.fillStyle = "white";
    for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 800, Math.random() * 200, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function dibujarAgua() {
    ctx.fillStyle = "#1b263b";
    ctx.fillRect(0, 250, 800, 200);
}

function dibujarCiudad() {
    ctx.fillStyle = "#111";
    let x = 50;

    for (let i = 0; i < 15; i++) {
        let altura = Math.random() * 150 + 50;
        ctx.fillRect(x, 250 - altura, 40, altura);

        // ventanas
        ctx.fillStyle = "yellow";
        for (let y = 250 - altura + 10; y < 250; y += 15) {
            ctx.fillRect(x + 10, y, 5, 5);
            ctx.fillRect(x + 25, y, 5, 5);
        }

        ctx.fillStyle = "#111";
        x += 50;
    }
}

function dibujarPuente() {
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 3;

    // base
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(800, 200);
    ctx.stroke();

    // torres
    ctx.fillStyle = "#444";
    ctx.fillRect(200, 120, 40, 80);
    ctx.fillRect(560, 120, 40, 80);

    // cables
    ctx.beginPath();
    ctx.moveTo(220, 120);
    ctx.lineTo(400, 80);
    ctx.lineTo(580, 120);
    ctx.stroke();

    // cables verticales
    for (let i = 220; i <= 580; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 200);
        ctx.lineTo(i, 140);
        ctx.stroke();
    }
}

function dibujarFaroles() {
    ctx.fillStyle = "gold";

    for (let i = 50; i < 750; i += 70) {
        ctx.beginPath();
        ctx.arc(i, 190, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   FUNCIÓN PRINCIPAL
========================= */

function dibujarEscena() {
    dibujarCielo();
    dibujarEstrellas();
    dibujarAgua();
    dibujarCiudad();
    dibujarPuente();
    dibujarFaroles();
}

dibujarEscena();