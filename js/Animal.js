export default class Animal {
    //setter
    setName(name){
        this.mName = name;
    }
    //getter
    getName(){
        console.log(this.mName);
    }
    // Behavior

    Walk(){
        console.log("Walking...");
    }
    Run(){
        console.log("Running...");
    }
}
