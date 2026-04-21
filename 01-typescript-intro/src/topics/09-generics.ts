export function whatsMyType<T>( argument: T ) : T {
    return argument;
}

let myString = whatsMyType<string>('Hello World');
let myNumber = whatsMyType<number>( 123 );
let myArray = whatsMyType<number[]>( [1,2,3] );

console.log( myString.split(' ') );
console.log( myNumber.toFixed() );
console.log( myArray.join('-') );
