/**
 * keyof => extraer las propiedades de una interface
 */
interface week {
    "monday": string;
    "tuesday": string;
    "wednesday": string;
    "thursday": string;
    "friday": string;
    "saturday": string;
    "sunday": string;
}

type Day = keyof week;
/**
 * ----------------------------
 * Ejemplo practico
 */

const dev = {
    type: "frontend",
    languages: ["js", "ts", "sass", "html"],
    senior: false
}

const showProps = <T>(obj: T, ...keys: (keyof T)[]): void => {
    keys.forEach(k => console.log(obj[k]));
}

showProps(dev,"languages","senior")