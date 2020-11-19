let n=10
a = 0
for(let i=1;i <=  n*2 ;i++)
{
    if(i%2 > 0)
    {
       a++
        if ((a%2) > 0) console.log( "n  [",a,"] = ",i-(i*2) ); 
        else console.log("n  [",a,"] = ",i);
    }   
}