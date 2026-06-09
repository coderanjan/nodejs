const fs= require('fs')
const crypto= require('crypto')
const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 0
// setTimeout(()=>{console.log('ho');
// },0)
// setImmediate(()=>{
//     console.log('anjan');
    
// })
// console.log('hi');

fs.readFile('/.sample.txt','utf-8',()=>{
    console.log('io pollinng finish');
    setTimeout(()=>console.log('hello from timer2'),0
    )
    setTimeout(()=>console.log('hello from timer 3'),5*1000
    )
    setImmediate(()=>{
        console.log('setimmediate');
        
    })

    // 
    crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 1 done');
        
    })
    crypto.pbkdf2('password2','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 2 done');
        
    })
    crypto.pbkdf2('password3','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 3 done');
        
    })
    crypto.pbkdf2('password4','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 4 done');
        
    })
    crypto.pbkdf2('password5','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 5 done');
        
    })
    crypto.pbkdf2('password6','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 6 done');
        
    })
    
})

console.log('hello from top code');
