/*
BeeCrowd 1006 — Média 2

Objetivo:
Calcular a média ponderada de três notas, com pesos 2, 3 e 5, respectivamente.

Entrada:
Três notas reais entre 0 e 10, uma por linha.

Saída:
A média identificada por "MEDIA = ", com uma casa decimal.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1006
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B, C] = input.split(/\s+/).map(Number);

const MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));