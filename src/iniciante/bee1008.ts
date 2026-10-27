import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nFunc, nHoras, vHora] = input.split(/\s+/).map(Number);

const salario = nHoras * vHora;

console.log("NUMBER = " + nFunc);
console.log("SALARY = U$ " + salario.toFixed(2));