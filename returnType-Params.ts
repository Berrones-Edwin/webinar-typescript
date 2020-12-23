/**
 * returnType | parmas
 */


interface userID {
    id: number;
    name: string;
}

const addTimeStamp = (userID: userID, useLocate: boolean = false) => ({
    ...userID,
    timeStamp: useLocate ? Date().toLocaleString() : Date.now()
});

type UserTimeStamp = ReturnType<typeof addTimeStamp>;
// Return Tuple
type UserTimeStampParams = Parameters<typeof addTimeStamp>;

// Caso práctico

type GenericFunction = (...args: any[]) => any;

const delay = <F extends GenericFunction>(f: F, t: number) =>
    (...args: Parameters<F>): Promise<ReturnType<F>> => {
        return new Promise(resolve => {
            setTimeout(() => resolve(f(...args)), t);
        })
    }

const shout = (text: string) => `${text.toUpperCase()}!!!`;
console.log("pim pam");

const delayShout = delay(shout, 1000);
delayShout("pum pam").then(console.log)
