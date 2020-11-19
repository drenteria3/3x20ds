function minimo ()
{
    let s = [3,1,4,2,3]
let min = Math.min(s[0],s[1],s[2],s[3],s[4]);
console.log(min)
}

console.time()
minimo ();
console.timeEnd();
console.log("complejidad lineal")