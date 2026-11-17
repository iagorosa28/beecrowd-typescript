/*
BeeCrowd 1009 — Salário com Bônus

Objetivo:
Determinar o total recebido por um vendedor, considerando o salário fixo e uma comissão de 15% sobre suas vendas.

Entrada:
O primeiro nome do vendedor, o salário fixo e o total de vendas do mês, um por linha.

Saída:
O total recebido identificado por "TOTAL = R$ ", com duas casas decimais.

Enunciado oficial: https://judge.beecrowd.com/pt/problems/view/1009
*/

// Minha resolução abaixo
import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nomeFunc, salarioFixoStr, totalVendasStr] = input.split(/\s+/);

const salarioFixo = Number(salarioFixoStr);
const totalVendas = Number(totalVendasStr);

const TOTAL = salarioFixo + (0.15 * totalVendas);

console.log("TOTAL = R$ " + TOTAL.toFixed(2));