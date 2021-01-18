//RENTERIA BARRETO DIEGO EDUARDO 3°E
function Node(data) {
    this.data = data;
    this.children = [];
}

class Arbol {
    constructor() {
        this.root = null;
    }
}
    Arbol.prototype.add=function (data, toNodeData)  {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        if(parent)
            parent.children.push(node);
        else
        if(!this.root)
            this.root = node;
        else
            return 'Tried to store node at root, root already exists.'
    }

    Arbol.prototype.findBFS=function (data) {
        const queue = [this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if (node.data == data)
                _node = node;
        })

        return _node;
    }

    Arbol.prototype.traverseBFS=function (cb) {
        const queue = [this.root]

        if(cb)
            while(queue.length) {
                const node = queue.shift();

                cb(node)

                for(const child of node.children)
                    queue.push(child)
            }
    }
Arbol.prototype.imprime=function (){
    if(!this.root) {
        return console.log('No encontrado');
    }
    let newline = new Node('|');
    let cola = [this.root, newline];
    let string = '';
    while(cola.length) {
        let node = cola.shift();
        string += node.data.toString() + ' ';
        if(node === newline && cola.length) {
            cola.push(newline);
        }
        for(let i = 0; i < node.children.length; i++) {
            cola.push(node.children[i]);
        }
    }
    console.log(string.slice(0, -2).trim());
}
Arbol.prototype.PorNivel = function() {
    if (!this.root) {
        return console.log('Nodo raiz no encontrado');
    }
    let lineas = new Node('\n');
    let cola = [this.root, lineas];
    let cad = '';
    while (cola.length) {
        let node = cola.shift();
        cad += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if (node === lineas && cola.length) {
            cola.push(lineas);
        }
        for (let i = 0; i < node.children.length; i++) {
            cola.push(node.children[i]);
        }
    }
    console.log(cad.trim());
}

let tree = new Arbol();

tree.add('Node1')
tree.add('Node2', 'Node1')
tree.add('Node3', 'Node1')
tree.add("Node4", "Node2")
tree.add("Node5", "Node2")
tree.add("Node6", "Node3")

tree.imprime()
tree.PorNivel()
console.log()
tree.traverseBFS((node) => {console.log('Nodo Actual: ', node)})