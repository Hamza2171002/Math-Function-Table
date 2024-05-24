#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function table(n1, n2) {
    console.log("_".repeat(15));
    for (let i = 1; i < n2; i++) {
        console.log(` ${n1} x ${i} = ${n1 * i}`);
    }
}
table(2, 10);
table(3, 10);
table(4, 10);
table(5, 10);
table(6, 10);
table(10, 10);
