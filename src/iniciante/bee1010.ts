/*
BeeCrowd 1010 — Cálculo Simples

Objetivo:
Determinar o valor total a pagar por duas peças compradas.

Entrada:
Duas linhas, cada uma com o código inteiro da peça, a quantidade inteira e o valor unitário real.

Saída:
O total identificado por "VALOR A PAGAR: R$ ", com duas casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1010
*/

// Escreva sua solução abaixo (pendente de resolução):
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const valores = input.split(/\s+/).map(Number);

const total = valores[1] * valores[2] + valores[4] * valores[5];

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));