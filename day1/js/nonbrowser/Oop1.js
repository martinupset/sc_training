function Student(roolNo, name) {
    this.roolNo = roolNo
    this.name = name
    this.sayHi = function() {
        setTimeout(function(){
            console.log(this.roolNo)
        },1000)
        console.log('hi')
    }
}

Student.prototype.print = function(){
    console.log("Roll no:" + this.roolNo)
    console.log("Name:" + this.name)
}

let s1 = new Student(1, 'haha')
s1.print()
s1.sayHi()