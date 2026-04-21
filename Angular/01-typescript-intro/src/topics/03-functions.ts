function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

//const result = addNumbers(5, 10);
//const resultArrow = addNumbersArrow(5, 10);
//const resultMultiply = multiplyNumbers(5);
//console.log({result, resultArrow, resultMultiply});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}
healCharacter(strider, 20);
strider.showHp();

export {};