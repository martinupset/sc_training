class Emp{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    hello(){
        console.log("hello")
    }

    print(){
        console.log(this.name+","+this.age)
    }
}

let emp1 = new Emp("Vishwa",55)
emp1.hello()
emp1.print()