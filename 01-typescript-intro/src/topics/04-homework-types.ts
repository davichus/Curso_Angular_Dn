interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'New York'
    },
    showAddress() {
        return `${this.name} lives in ${this.address.city}, ${this.address.country}`;
    }
}

const address = superHero.showAddress();
console.log(address);

export {};