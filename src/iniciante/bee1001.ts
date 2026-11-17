/*
BeeCrowd 1001 — Extremamente Básico

Objetivo:
Calcular a soma de dois números inteiros.

Entrada:
Dois inteiros, A e B, um por linha.

Saída:
A soma, identificada por "X = ", seguida de uma quebra de linha.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1001
*/

// Minha resolução abaixo
import * as fs from "fs";

// Para ler inputs
const input = fs.readFileSync(0, "utf8").trim();

const [A, B] = input.split(/\s+/).map(Number);
/* /\s+/ -> um ou mais espaços em branco (espaço, quebra de linha, tab) */

const X = A + B;

console.log("X = " + X);