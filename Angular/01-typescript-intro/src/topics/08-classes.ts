export class Person {
    public name:string;
    public address :string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    constructor(
       public alterEgo: string,
       public age: number,
       public realName: string
    ) {
       super( realName, 'New York, USA');
    }
}


const ironman = new Hero('Tony Stark', 45, 'Tony Stark');
console.log(ironman);