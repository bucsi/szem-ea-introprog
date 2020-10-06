let arr = [1,2,3,0,-4,10,0]

// Hány <0 szám van?

let result = 0
for(const i of input){
    if(i<0){
        result++
    }
}
console.log(`Az inputban ${result} 0-nál kisebb szám van.`)

console.log(`ugyanez reduce-val: ${input.reduce((s,x) => s + (x<0?1:0),0)}`)