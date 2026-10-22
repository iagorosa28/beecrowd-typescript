import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [nota1, nota2] = input.split(/\s+/).map(Number);

const MEDIA = (nota1 * 3.5 + nota2 * 7.5) / 11

console.log("MEDIA = " + MEDIA.toFixed(5));