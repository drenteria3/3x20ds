function hora(x){
   
   let f = 10;
   let r = f + x%24; 


   if (r > 24)return r - 24;
   else if (r == 24) return r = 0;
   else return r;
}

console.log("en 25,000 horas, serán las: ", hora(25000));

