
// Dont do this 

// let dog1 = {
//     name: "dog",
//     legCount: 4,
//     speaks: "bhow Bhoow"
// }

// A basic Structure 

class Animal {
    constructor(name , legcout , speaks) {
        this.name = name;   //attributes
        this.legcout = legcout;
        this.speaks = speaks; 
    }
    static myType() {
        console.log("Animal")//these arent associated to object these are asscoited to class it self 
    }                  
    speak() {  // functions ehat should to do
        console.log("hey fuck you there " + this.speaks)
    }
    
}

console.log(Animal.myType()); // here does not works this console.log(Animal.speak())
//cuase speak() funtion can be called in object of the class cannot be called on class itself
//if you want call it directly on the class you should use static keyword

// let dog = new Animal("dog", 4, "bhow bhow");

// dog.speak()