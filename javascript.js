let input = [1,2,3,0,-4,10,0]

// Hány <0 szám van?

let sum = 0
for(const i of input){
    if(i<0){
        sum++
    }
}
console.log(`Az inputban ${sum} 0-nál kisebb szám van.`)

console.log(`ugyanez reduce-val: ${input.reduce((s,x) => s + (x<0?1:0),0)}`)