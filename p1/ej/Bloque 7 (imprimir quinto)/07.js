var n=5; 

var a= new Array(n);  
for (var i=1;i<=n;i++) {  
 a[i] = new Array(n);  
}  



for(i=1;i<=n;i++)  
 for(j=1;j<=i;j++){ 
  a[i][j]=combinacion(i-1,j-1);  
 }  


console.log("El quinto renglón del triangulo de pascal es : ")

for(i=1;i<=n;i++){  
 for(j=1;j<=i;j++){  
  if (i == 5 ){
    console.log(a[i][j]);   
  } 
}   
    
}  



function combinacion(p,q){  
 return  Math.round(factorial(p)/(factorial(q)*factorial(p-q)));   
}  


 
function factorial(h){  
 var f=1;  
 if (h!==0){  
  for (k=1;k<=h;k++){  
   f*=k;  
  }  
 }  
 return f;  
}  