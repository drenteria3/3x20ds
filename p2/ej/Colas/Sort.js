//RENTERIA BARRETO DIEGO EDUARDO 3°E
function Queue() {  //  Definimos la cola
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}//  Definimos la cola

function enqueue(element) {     //Definimos el metodo push para meter elemento a la cola
    this.dataStore.push(element);
}   // Metodo para meter elementos a la cola

function dequeue() {            // El metodo shift para sacar elementos de la cola
    return this.dataStore.shift();
}  //  Metodo para Sacar elementos de la cola

function front() {
    return this.dataStore[0];
} //Metodo que muestra el primer elemento de la cola

function back() {
    return this.dataStore[this.dataStore.length-1];
}//Metodo que muestra el ultimo elemento

function toString() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
} // Metodo para mostrar los elemento de la cola

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}// Metodo que muestra si la cola esta vacia o no

function distribuidor(nums, queues, n, digit) { // Funcion para distribuir los numeros en la colas de menor a mayor
    for (let i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collector(queues, nums) {  // Funcion para recolectar los numeros de la cola
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
function pintarArray(arr) {     //Funcion para pintar la cola
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}
// Programa principal

let queues = [];    //Declaramos un array donde aguardaremos los elementos de la cola
for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();    //Introducimos los elemento en nuestra nueva cola
}
let nums = [];   //Declaramos un array que sera donde aguardemos los numeros
for (let i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));  //Generamos numeros aletorias para rellenar el array de numeros
}
console.log("Antes del acomodo: ");
pintarArray(nums);      //  Mostramos los numeros
distribuidor(nums, queues, 10, 1);  //  Distribuimos los numeros de menor a mayor en la cola
collector(queues, nums);    //  Los sacamos de la cola y los recolectamos en el array
distribuidor(nums, queues, 10, 10); //  Repetimos nuevamente el proceso para que queden ordenados
collector(queues, nums);
console.log("\n\nDespues del acomodo: ");
pintarArray(nums);  // Mostramos los numeros ordenados