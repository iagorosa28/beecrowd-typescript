/*
BeeCrowd 1003 — Soma Simples

Objetivo:
Determinar a soma de dois valores inteiros.

Entrada:
Dois inteiros, A e B, um por linha.

Saída:
O resultado identificado por "SOMA = ", seguido de uma quebra de linha.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1003
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B] = input.split(/\s+/).map(Number);

const SOMA = A + B;

console.log("SOMA = " + SOMA);
