console.log("escribe la cantidad de numeros primos : ");
p = process.openStdin()

p.addListener("data", function(n){

    prim(n);
    process.exit();
})




function prim(n){
for(let i = 2; i<=n; i++){
     var p= 1;
     var x= 2;
     while (x <= i/2 && p){
     if ( i % x ===0) p = 0;    
      x++;
   }
     if (p) console.log("n = ",i);
 }
}