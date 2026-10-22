import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const raio = Number(input);

const n = 3.14159;

const area = n * raio**2;

console.log("A=" + area.toFixed(4));
/* .toFixed(4) formata o número com 4 casas decimais */