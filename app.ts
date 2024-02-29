interface PersonType {
    name: string
    age: number
    height: number
}

class Person implements PersonType {
    name: string
    age: number
    height: number
    constructor(name: string) {
        this.name = name
        this.age = 0
        this.height = 10
    }
}

export default Person

