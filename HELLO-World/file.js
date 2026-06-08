const fs = require("fs")

// sync ...
// fs.writeFileSync('./test.txt','Hello World')

// Async
// fs.writeFile('./test.txt','Hello World' ,(err)=>{
//     console.log(err)
// })

// const result = fs.readFileSync('./contacts.txt','utf-8')
// console.log(result);
// fs.readFile('./contacts.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(result);
        
//     }
// })
// console.log(result);

// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt','hey there\n')
// fs.cpSync('./test.txt','./copy.txt')


// fs.unlinkSync('./copy.txt')

// console.log(fs.statSync('./test.txt'));
// console.log(fs.statSync('./test.txt').isFile());

fs.mkdirSync('my-docs')
