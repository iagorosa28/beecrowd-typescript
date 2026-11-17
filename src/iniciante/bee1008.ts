/*
BeeCrowd 1008 — Salário

Objetivo:
Determinar o salário de um funcionário a partir das horas trabalhadas e do valor por hora.

Entrada:
O número do funcionário, a quantidade de horas trabalhadas e o valor real recebido por hora, um por linha.

Saída:
O número do funcionário com "NUMBER = " e, na linha seguinte, o salário com "SALARY = U$ " e duas casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1008
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nFunc, nHoras, vHora] = input.split(/\s+/).map(Number);

const salario = nHoras * vHora;

console.log("NUMBER = " + nFunc);
console.log("SALARY = U$ " + salario.toFixed(2));