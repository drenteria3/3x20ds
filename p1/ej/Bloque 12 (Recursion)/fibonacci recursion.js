function f (x){
    if(x <= 1)return x;
    else return (f(x-1) + f(x-2))
}

console.log(f(10))