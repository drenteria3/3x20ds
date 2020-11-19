//opté por tomar un arreglo de 5 numeros aleatorios entre 0 y 10e6.
//traté de hacerlo, con este ejercicio no funcionó, se crasheaba el vsc
let n = [];
let x = 5; 
let inversiones = 0;


for(i = 0; i < x; i++) {
    n.push(Math.round(Math.random()*Math.pow(10,5)))
}

//imprimir original
console.log("Arreglo original :") 
for(i = 0; i < n.length; i++){
   console.log( "posición [",i,"] =",n[i] )
}



function ordenamiento (){
 for(i = 0; i < n.length; i++)
   for(j = 0; j< n.length ; j++){
      if(n[j]>n[j+1]){
          let a = n[j]        
          n[j] = n[j + 1];    
          n[j + 1] = a       
      
          inversiones++;
        }
    }


//Imprimir ordenado
 console.log("\nArreglo ordenado : ")
 for(i = 0; i < n.length; i++){
   console.log( "posición [",i,"] =",n[i] )
}
}
console.time()
ordenamiento()
console.timeEnd();

console.log("Inversiones : ", inversiones)

//Para el caso de tener un arreglo de x elementos donde x = 5:
//el promedio de las inversiones que se hacen en este caso es:  5.2 Inversiones.

//¿se puede mejorar el tiemo de ejecución?
//si... Existen más y mejores algoritmos que el método de la burbuja,
// como lo es el metodo recursivo quic-sort o la función sort.