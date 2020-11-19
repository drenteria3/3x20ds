function imprimir()
{
    let n = new Set();
      n.add(Math.pow(10,4))
      n.add(Math.pow(10,5))
      n.add(Math.pow(10,6))

    console.log(n)
}

console.time();
imprimir();
console.timeEnd();