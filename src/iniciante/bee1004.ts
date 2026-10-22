import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B] = input.split(/\s+/).map(Number);

const PROD = A * B;

console.log("PROD = " + PROD);
