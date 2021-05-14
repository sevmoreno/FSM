class Stack {


    constructor () {
        
        this.data = []
        this.elements = 0
    }


    push (elemento) {

        this.elements = this.elements + 1
        this.data[this.elements - 1] = elemento
    }


    length () {

        return this.elements 
    }

    peak () {

        return this.data[this.elements - 1]

    }


    pop () {

        let popElemente = this.data[this.elements - 1]
        this.data[this.elements - 1] = null
        this.elements = this.elements - 1
        return popElemente

    }



    print () {

        for( let i=0; i < this.elements; i++) {

            console.log("--------STACK---------")

            console.log(this.data[i])

            console.log("--------     ---------")

        }


    }

    reversePush (elemento) {

        
        // this.data[this.elements - 1] = elemento

        for ( let i = this.elements; i != 0; i--) {

            // console.log("Posicion i " + i)
            // console.log(this.data[i-1])

            this.data[i] = this.data[i - 1]
        }

        this.data[0] = elemento

        this.elements = this.elements + 1


    }

    reversePop() {

        let elementToReturn = this.data[0]

        for( let i = 0; i < this.elements; i++) {

            this.data[i] = this.data[i + 1]
        }

        this.elements = this.elements - 1

        this.data[this.elements] = null

        return elementToReturn

    }


}

let a = new Stack;

// console.log(a.length())

a.push(1);
a.push(3);
a.push(54);

// console.log(a.length())

// a.print()
// console.log(a.peak());

// console.log(a.pop());

// console.log(a.length())

// a.print()

a.reversePush(88)

a.print()

console.log(a.reversePop())

a.print()
