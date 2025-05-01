let numEx = 50
var stringEx = "I am a string"
const pi = 3.14159

const objBrayden = {
    name: "Brayden",
    petName: "Ozzy",
    both: function() {
        return this.name+" "+this.petName
    }
}

console.log("Hello world!")
console.log("I wasn't aware that " + stringEx)
console.log("My name is " + objBrayden.name)
console.log("My cat's name is " + objBrayden.petName)
console.log("Together we make "+ objBrayden.both())