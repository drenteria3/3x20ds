
let l1 = 2;
let l2 = 1;
let ln =  1;
for(i = 1; i<= 9; i++){
   if (i == 4) console.log("El quinto numero de lucas es : ",ln)
    ln =  l1 + l2;
    l1 = l2;
    l2 =ln;
    
}
