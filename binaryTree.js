
class Node {

  constructor(value) {
    this.value = value
    this.right = null
    this.left = null

  }

}

class BinaryTree {

  constructor() {

    this.root = null
  }

  insert (valor) {

    let nuevoNodo = new Node ()
    nuevoNodo.value = valor

    if (this.root === null) {

      this.root = nuevoNodo
      this.root.value = valor
      return
      
    }


    let nodeCheck = this.root

   
    while (nodeCheck) {

    if (nodeCheck.value === valor) {
      console.log("igual")
      return
    } else if (valor > nodeCheck.value) {

      console.log("Mayor")
      if (!nodeCheck.right) {

        nodeCheck.right = nuevoNodo
        return

      } else {

        nodeCheck = nodeCheck.value.right
      }


    } else if (valor < nodeCheck.value ) {
      console.log("Menor")

      if (!nodeCheck.left) {

 
        nodeCheck.left = nuevoNodo
        return 

      } else {

       
        nodeCheck = nodeCheck.left
        
      }


    }



  }
}

find (valor)
{
  console.log(valor)
  let compareNode = this.root

  while(compareNode) {

    console.log("comparando")

  if (valor === compareNode.value) {
    return true
  } else if (valor < compareNode.value) {
    
    compareNode = compareNode.left 

  } else if (valor > compareNode.value) {
    compareNode = compareNode.right
  }

}
return false 

}
}



let manualBinaryTree = new BinaryTree()
// manualBinaryTree.root = new Node(10)
// manualBinaryTree.root.left = new Node(4)
// manualBinaryTree.root.right = new Node(15)

manualBinaryTree.insert(4)
// manualBinaryTree.insert(5)
manualBinaryTree.insert(1)
manualBinaryTree.insert(6)
manualBinaryTree.insert(6)
manualBinaryTree.insert(2)
console.log(JSON.stringify(manualBinaryTree))
console.log(manualBinaryTree.find(6))


