import Animal from './Animal.js';
 export class Dog extends Animal{
    bite(){
        console.log("Bitting someone...");
    }
    barck(){
        console.log("Fus! Fus!...");
    }
}
const dog = new Dog();
dog.setName("kiki");
dog.Run();
dog.barck();
dog.getName();
dog.Walk();
dog.bite();