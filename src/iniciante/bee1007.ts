/*
BeeCrowd 1007 — Diferença

Objetivo:
Determinar a diferença entre o produto dos dois primeiros valores e o produto dos dois últimos.

Entrada:
Quatro inteiros, A, B, C e D, um por linha.

Saída:
O resultado identificado por "DIFERENCA = ", seguido de uma quebra de linha.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1007
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B, C, D] = input.split(/\s+/).map(Number);

const DIFERENCA = (A * B - C * D);

console.log("DIFERENCA = " + DIFERENCA);