let n = 10;
let r = n;

function combinacion(){
//R<=N

  let num = factorial(n+r-1);             
  let den = factorial(r) * factorial(n-1);

  let res = num/den;       //division

    return res;
}



function factorial (f){
    for(i = f-1; i >=1; i-- ){
     f = f*i
   }
   return f;
}