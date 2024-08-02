class Parrot {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    makeSound():string{
        return `Parrot beaks & ability to mimic human speech , my ${this.name} is make Sound "MiThu PUtr"  and mithu ${this.age} Years Old`
    }
}
let Mithu = new Parrot("Mithu",1)
console.log(Mithu.makeSound());
