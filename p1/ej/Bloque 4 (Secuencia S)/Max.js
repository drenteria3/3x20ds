function maximo ()
{
    let s = [3,1,4,2,3]
let max = Math.max(s[0],s[1],s[2],s[3],s[4]);
console.log(max)
}

console.time();
maximo()
console.timeEnd()
console.log("Complejidad computacional lineal")