let n = 10;
for(let i = 2; i<=n; i++)
{
    var np= 1;
    var x= 2;
    while (x <= i/2 && np)
  {
    if ( i % x ===0) np = 0;    
    x++;
   }
    if (np) console.log("n = ",i);
}