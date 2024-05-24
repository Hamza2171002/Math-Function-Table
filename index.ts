#! /usr/bin/env node

function table(n1: number, n2: number){
    console.log("_".repeat(15));
    for(let i = 1; i < n2; i++){
        console.log(` ${n1} x ${i} = ${n1*i}`);
        
    }
}
table(2, 10);
table(3, 10);
table(4, 10);
table(5, 10);
table(6, 10);
table(10, 10);
