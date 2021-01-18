//RENTERIA BARRETO DIEGO EDUARDO 3°E
class pila {
    constructor() {
        this.items = {};
        this.top = 0;
    }

    push(data) {
        this.top++            
        this.items[this.top] = data; 
    }
    pop()
    {                       
        let borrarData;      

        if (this.top) {
            borrarData = this.items[this.top];//esa variable guarda el ultimo
            delete this.items[this.top]        //valor de la pila
            this.top--; //disminuye el tamaño pot que se sacó y elimino un elemento
            return borrarData;
        }

    }

    getSize(){return this.top;} //devolver el tamaño de la pila

    isEmpty()
    {if(!this.getSize()) return true;  //saber si está vacío
        else return false;}

    peek()
    {
        if(this.isEmpty())return null;
        else return this.items[this.top]; //decir cual es el de la pila
    }
    print()
    {
        if(this.isEmpty())return null,"pila vacía"
        let result = '';
        for(let i = this.top; i>0 ; i--)
        {
            result += this.items[i] + ' '
        }
        return result;
    }
    clear()
    {
        this.items = [];
        this.top = 0;
    }
    baseConverter(decNumber, base)
    {
        let stk = new pila(),
            rem,
            baseString = '',
            digits = '0123456789ABCDEF'; //{6}
        while (decNumber > 0){
            rem = Math.floor(decNumber % base);
            stk.push(rem);
            decNumber = Math.floor(decNumber / base);
        }
        while (!stk.isEmpty()){
            baseString += digits[stk.pop()]; //{7}
        }
        this.push(baseString);
        return baseString;
    }
}
let stack = new pila();
stack.push("Vaso 1");
stack.push("Vaso 2");
stack.push("Vaso 3");
stack.push("Vaso 4");
stack.push("Vaso 5");
stack.push("Vaso 6");
stack.push("Vaso 7");


console.log("<<<Pila :",stack.print());
console.log("tamaño de pila",stack.getSize());
console.log("el Vaso arriba de la pila es:", stack.peek())
console.log("Sacar ",stack.pop())

console.log("<<<Pila :",stack.print(),toString());
console.log("tamaño de pila",stack.getSize());
console.log("el Vaso arriba de la pila es:", stack.peek())
console.log("Sacar ",stack.pop())


stack.clear();
console.log("Se han borrado todos los elementos.")
console.log("<<<Pila :",stack.print(),toString());
console.log("tamaño de pila",stack.getSize());
console.log("tamaño", stack.isEmpty());

stack.baseConverter(100345,8)
console.log("<<<Pila :",stack.print(),toString());
console.log("ultimo de la pila", stack.peek())
console.log("tamaño de pila",stack.getSize());


stack.baseConverter(15,2)
console.log("<<<Pila :",stack.print(),toString());
console.log("tamaño de pila",stack.getSize());
console.log("ultimo de la pila", stack.peek())
