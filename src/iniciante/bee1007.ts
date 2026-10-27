import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B, C, D] = input.split(/\s+/).map(Number);

const DIFERENCA = (A * B - C * D);

console.log("DIFERENCA = " + DIFERENCA);