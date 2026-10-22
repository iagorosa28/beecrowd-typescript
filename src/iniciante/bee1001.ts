import * as fs from "fs";

// Para ler inputs
const input = fs.readFileSync(0, "utf8").trim();

const [A, B] = input.split(/\s+/).map(Number);
/* /\s+/ -> um ou mais espaços em branco (espaço, quebra de linha, tab) */

const X = A + B;

console.log("X = " + X);