let n = 10;
let f1 = 1;
let f2 = 0;
let fn =  0;
let a = [];
for(i = 0; i< n; i++)
{
    if (i >0 )f2 = 1

    fn =  f1 + f2;
    f1 = f2;
    f2 = fn;

    a.push(fn)   
}

for(i = 0; i < a.length; i++)
{
    console.log("n [",i+1,"]= "+a[i] );
}
