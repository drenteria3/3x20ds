let n = 3         //invitados
let r = 2         //personas interactiando

function combinacon()
{
    let num = permutacion(n)
    let den = permutacion(n-r) * permutacion(r)

    let div = num / den;

    return div; 
}

function permutacion (p)
{
    for(i = p-1; i >=1; i-- )
   {
     p = p*i
   }
   return p;
}

console.log(combinacion(),"Saludos ocurridos");