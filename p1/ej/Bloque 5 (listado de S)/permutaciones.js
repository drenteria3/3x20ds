let s = [3,1,4,2,3];

function pp (s) {
    const permutaciones = [];
    const permutar = (a, permutacion = []) =>{
        if (!a.length){
            permutaciones.push(permutacion)
            return
        }
        for(let i in a){
            let c = a.slice();
            let next = c.splice(i,1)
            permutar(c, permutacion.concat(next))
        }
    } 
    permutar(s);
    return permutaciones;
}
console.time()
pp(s)
console.timeEnd()
console.log("complejidad cuadrática")
console.log(pp(s))