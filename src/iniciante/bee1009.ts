import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nomeFunc, salarioFixoStr, totalVendasStr] = input.split(/\s+/);

const salarioFixo = Number(salarioFixoStr);
const totalVendas = Number(totalVendasStr);

const TOTAL = salarioFixo + (0.15 * totalVendas);

console.log("TOTAL = R$ " + TOTAL.toFixed(2));