import Animal from './Animal.js';
 export class Cat extends Animal {
    cry(){
        console.log("Mav Mav...");
    }
    jump(){
        console.log("jumping...");
    }
}
const cat = new Cat();
cat.Run();