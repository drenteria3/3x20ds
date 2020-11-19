let l1 = 2;
let l2 = 1;
let ln =  1;
let a = [];
console.log(l1);
for(i = 1; i<= 9; i++){
    a.push(ln)
    ln =  l1 + l2;
    l1 = l2;
    l2 =ln;
}
for(i = 0; i<=a.length; i++){
    console.log(a[i]);
}