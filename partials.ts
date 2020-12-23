/**
 * Partials
 * hacer opcionales las propiedades de una interfaz
 */

//  caso practico

const createState = <T extends object>(initialState: T) => {
    let state: T = initialState;
    // console.log(state)
    return {
        setState: (partialState: Partial<T>):T => {
            state = { ...initialState, ...partialState }
            return state
        }
    }

}

// const createState = <T extends object>(initialState: T) => {
//     let state: T = initialState;
//     // console.log(state)
//     return {
//         setState: (partialState: Partial<T>): T =>
//             (state = { ...initialState, ...partialState })

//     }

//     // setState: ()=>state
// };
// // return state




const { setState } = createState({
    username: "edwin@gmail.com",
    avatar: "dog.png",
    post: 234,
    premium: false
})

console.log(setState({ post: 566, premium: true }))
// console.log(setState())

