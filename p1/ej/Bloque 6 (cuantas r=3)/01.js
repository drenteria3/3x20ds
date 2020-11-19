
function combinacion(){


  let num = factorial(8+8-1);             
  let den = factorial(8) * factorial(8-1);

  let res = num/den;       

    return res;
}

//calculo de factoriales/permutaciones 
function factorial (f){
    for(i = F-1; i >=1; i-- )
   {
     f = f*i
   }
   return f;
}



console.log("Hay [",combinacion(),"] combinaciones posibles")