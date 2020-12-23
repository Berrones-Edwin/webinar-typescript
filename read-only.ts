/**
 * ReadOnly
 */


interface State {
    username: string;
    password: string;
}

type ROState = Readonly<State>;

type ROArray<T> = Readonly<Array<T>>

// Caso practico
const sampleArray = [1, 2, 3];

//Primero ejecuta array.shift 
//despues regresa el array

/**
 * 
 *  
 *  [LOG]: [ 2, 3],  [2, 3] 
 */
const tailMutable = <T>(array: Array<T>): Array<T> => (array.shift(), array)
console.log(sampleArray,tailMutable(sampleArray))

type a<T> = {  [P in keyof T]: T[P]; }
/**
 * 
 *  
 *  [LOG]: [1, 2, 3],  [2, 3] 
 */
const tailInmutable = <T>(array: Readonly<Array<T>>): Array<T> => {
    // const [other, ...tail] = array || []
    // console.log(other, tail)
    const [, ...tail] = array || []
    return tail;
}
console.log(sampleArray, tailInmutable(sampleArray))