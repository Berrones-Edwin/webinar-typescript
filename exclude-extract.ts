
/**
 * Exclude & Extract
 */

type WeekDays = "lun" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo";
type WorksDays = Exclude<WeekDays, "sabado" | "domingo">;
type Weekend = Extract<WeekDays, "sabado" | "domingo">;

// Practico
// Diferentes
type Diff<A extends object, B extends object> = {
    [P in Exclude<keyof A, keyof B>]: A[P]
}
// Iguales
type Common<A extends object, B extends object> = {
    [P in Extract<keyof A, keyof B>]: A[P] | B[P];
}

interface userDetails {
    id: string;
    name: string;
    age: number;
    phone: number;
    married: boolean;
}
interface userInfo {
    id: number;
    name: string;
}
// Difference
type UserDiff = Diff<userDetails, userInfo>
// Common
type UserCommon = Common<userDetails, userInfo>


const calculateCommon = <A extends object, B extends object>(a: A, b: B): Common<A, B> => {
    let result = { ...a };

    for (const key in a)
        if (a.hasOwnProperty(key) && !b.hasOwnProperty(key)) delete result[key]

    return result;
}

const userDetailsObj: userDetails = {
    id: "11",
    name: "Ivan",
    age: 33,
    phone: 3456,
    married: false
}
const userIDObj: userInfo = {
    id: 11,
    name: "Ivan",
}

const result = calculateCommon(userIDObj, userDetailsObj)
console.log(result);
