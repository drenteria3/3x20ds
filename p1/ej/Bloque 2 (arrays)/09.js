let n=10
let e = 0
let a = []
for(let i=1;i <=  n*2 ;i++)
{
    if(i%2 > 0)
    {
       e++
        if ((e%2) > 0) a.push(i-(i*2) ); 
        else a.push(i);
    }   
}
for(i = 0; i<a.length; i++)
{
    console.log("n = [",i+1,"] = ", a[i])
}