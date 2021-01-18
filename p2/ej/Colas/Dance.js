//RENTERIA BARRETO DIEGO EDUARDO 3°E
//Funciones para declarar la cola asi como otras funciones de esta mismas

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

function bailadores(name, sex) {
    this.name = name;
    this.sex = sex;
}   //Metodo que va registrando nuestros bailadores

function baile(males, females) {
    console.log("Los bailadores son: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("bailador femenino es: " + person.name);
        person = males.dequeue();
        console.log(" y el bailador masculino es: " + person.name);
    }
    console.log();
}   // Metodo que va sacando a nuestro bailadores

let maleDancers = new Queue();  // Creamos una cola para los bailadores hombres
let femaleDancers = new Queue();    //Creamos una cola para los bailadores mujeres

maleDancers.enqueue(new bailadores("Jeremy","M"));    //Definimos el primer hombre que estara dentro de nuestra cola para bailadores hombres
maleDancers.enqueue(new bailadores("Charley","M"));
maleDancers.enqueue(new bailadores("Luis","M"));
maleDancers.enqueue(new bailadores("Carlos","M"));

femaleDancers.enqueue(new bailadores("Ivana", "F"));    //Definimos la primer mujer que estara dentro de nuestra cola para bailadores hombres
femaleDancers.enqueue(new bailadores("Michell", "F"));
femaleDancers.enqueue(new bailadores("Johana", "F"));
femaleDancers.enqueue(new bailadores("Tania", "F"));
femaleDancers.enqueue(new bailadores("Jacqui", "F"));

baile(maleDancers, femaleDancers);  //Ejecutamos el metodo
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " Esta esperando para bailar.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " Esta esperando para bailar.");
}