const fs = require('fs')

// sync blocking
// console.log(1);

// let result = fs.readFileSync('./contacts.txt','utf-8')
// console.log(result);

// console.log(2);

// async  non blocking
// console.log(1);

//  fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     console.log(result);
    
//  })


// console.log(2);

// default thread pool size = 4
// max? - 8core cpu - 8

const os=require('os')
console.log(os.cpus().length);
