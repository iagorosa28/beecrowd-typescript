/*
BeeCrowd 1005 — Média 1

Objetivo:
Calcular a média ponderada de duas notas, com pesos 3.5 e 7.5, respectivamente.

Entrada:
Duas notas reais entre 0 e 10, uma por linha.

Saída:
A média identificada por "MEDIA = ", com cinco casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1005
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nota1, nota2] = input.split(/\s+/).map(Number);

const MEDIA = (nota1 * 3.5 + nota2 * 7.5) / 11

console.log("MEDIA = " + MEDIA.toFixed(5));