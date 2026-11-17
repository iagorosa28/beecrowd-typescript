/*
BeeCrowd 1011 — Esfera

Objetivo:
Determinar o volume de uma esfera a partir do raio. Considere pi igual a 3.14159.

Entrada:
Um número real de dupla precisão que representa o raio da esfera.

Saída:
O volume identificado por "VOLUME = ", com três casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1011
*/

// Escreva sua solução abaixo (pendente de resolução):
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const r = Number(input);

const pi = 3.14159;

const volume = (4/3) * pi * (r ** 3);

console.log("VOLUME = " + volume.toFixed(3));