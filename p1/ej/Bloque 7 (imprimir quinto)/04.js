let n = 10;
let f1 = 1;
let f2 = 0;
let fn =  0;
for(i = 0; i< n; i++){
    if (i >0 )f2 = 1

    fn =  f1 + f2;
    f1 = f2;
    f2 = fn;

    if (i == 4)console.log("Quinto numero de fibonacci es: ",fn)
    
}
