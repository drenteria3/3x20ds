let n =30
let a = [];
for(let i = 2; i<=n; i++){
    var p= 1;
    var x= 2;
    while (x <= i/2 && p){
    if ( i % x ===0) p = 0;    
    x++;
   }

    if (p){
         a.push(i);
    }
}

for(i = 0; i<a.length; i++){
    if (i ==4 )console.log("quinto primo es :",a[i])
}