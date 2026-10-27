import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();

const [A, B, C] = input.split(/\s+/).map(Number);

const MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));