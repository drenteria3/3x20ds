//RENTERIA BARRETO DIEGO EDUARDO 3°E
class Node{ // Clase para construir el nodo
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{   //Clase para constructor para la lista enlazada
    constructor() {
        this.head=null;
        this.size=0;
    }

    add(data){  //Metodo para agregar datos
        const newNode= new Node(data,null); //  Creamos un nuevo nodo
        if(!this.head){   // Verifica si la cabeza esta vacia es decir si no hay cabeza el nodo que introducimos es el primer elemento
            this.head=newNode;
        }
        else{   // Del lado contrario si ya hay una cabeza es decir ya tenemos algun nodo metere al nodo al ultimo lugar
            let current = this.head; // Mantenemos registro del valor actual de la cabeza
            while(current.next){  // Mientras la cabeza tenga una referencia al siguiente nodo
                current=current.next; //    Convertimos el valor actual de la cabeza al valor siguiente de la cabeza
            }
            current.next=newNode; // Al saber la posicion donde debemos poner el nuevo nodo lo creamos

        }
        this.size++;
    }

    removeFrom(index){  //Metodo para retirar elemento conforme a un indice
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous = null;

        if(index === 0) current = this.head;
        else
        {
            for(let i = 0; i < index; i++)
            {
                previous = current;
                current = current.next;
            }
            previous = current;
        }

        return current.data
    }
    getsize(){  //  Funcion para obtener el tamaño
        return this.size;
    }
}

const linkedList = new LinkedList();  // creamos nuestra lista enlazada
const matriz=[1,2,3];
console.log("Matriz que transformaremos a lista enlazada")
console.log(matriz);    // Imprimimos la matriz
for (let i = 0; i < matriz.length; i++){
    linkedList.add(matriz[i]);
}
console.log("Lista convertida a matriz:");
console.log(linkedList);