let n = 10;
let a = [];
for(let i = 1; i<=10;i++)
{
    if(i%2 != 0)a.push(i);     
}
for(i = 0; i < a.length; i++)
{
    console.log("n [",i+1,"]= "+a[i] );
}