console.log("escribe el número de elementos aleatorios: ")
let c = process.openStdin();

c.addListener("data",function(n){

       aleatorio(n);
       process.exit();

});

function aleatorio(a)
{
 for(i= 1; i<= a; i++)
 {
    console.log("numero [",i,"] : ",Math.round(Math.random()*a))
 }
}