
class Trie {

    constructor() {

        this.children = {};
        this.prefix = "";
        this.head = "*"
        this.isWord = false;

    }


    add(word) {

        let current = this

        let cantidad = word.length

        for (let i = 0; i < word.length; i++) {

 
            let newWord = new Trie ();

            if (current.children.key === word[i]) {


                current = newWord;

            } else  {

                current.children[word[i + 1]] = newWord;
                current.prefix = word[i];

                if (cantidad === i + 1) {

                    current.isWord = true;
                    // console.log("Econtro")
                }

                current = newWord;


               

            }


        }


         current.isWord = true


    }

    getWords(word) {


        let current = this

        if (current.isWord === true) {
          //  console.log("true")
        }
        
        let cantidad = word.length
        for(let i = 0; i < cantidad; i++) {

            if (word[i] === current.prefix) {
                
                // console.log(word[i])
                console.log(Object.keys(current.children))
                console.log(word[i])

                if (Object.keys(current.children) == word[i+1]) {

                    // console.log("Dentro del bucle")

                    current = current.children[word[i+1]]
                }



            }
        
            
            console.log(current.isWord)

        }



    }


}




let nuevoTrie = new Trie ();

nuevoTrie.add("AUTO");
nuevoTrie.add("AUTOma");
// console.log(nuevoTrie);
nuevoTrie.getWords("AUTOma")

