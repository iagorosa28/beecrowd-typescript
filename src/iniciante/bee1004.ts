/*
BeeCrowd 1004 — Produto Simples

Objetivo:
Determinar o produto de dois valores inteiros.

Entrada:
Dois inteiros, A e B, um por linha.

Saída:
O resultado identificado por "PROD = ", seguido de uma quebra de linha.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1004
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B] = input.split(/\s+/).map(Number);

const PROD = A * B;

console.log("PROD = " + PROD);
