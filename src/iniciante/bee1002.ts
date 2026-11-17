/*
BeeCrowd 1002 — Área do Círculo

Objetivo:
Calcular a área de um círculo a partir do raio, considerando pi igual a 3.14159.

Entrada:
Um número real que representa o raio do círculo.

Saída:
A área identificada por "A=", com quatro casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1002
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const raio = Number(input);

const n = 3.14159;

const area = n * raio**2;

console.log("A=" + area.toFixed(4));
/* .toFixed(4) formata o número com 4 casas decimais */