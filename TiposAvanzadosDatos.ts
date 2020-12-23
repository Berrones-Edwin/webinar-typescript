// Union Types
let age: number | string;

age = 50

age = "50"

// Guards

function IsNumber(obj: number | string): obj is number {
    return typeof obj === "number"
}

function IsString(obj: number | string): obj is string {
    return typeof obj === "string"
}

function printAge(age: number | string) {
    if (typeof age === "number") {
        // Estamos seguros que el objeto es un numero
    } else {
        // Estamos seguros que el objeto es un string

    }
}

// Intersection Types
class User {
    name: string = ""
}
class Admin {
    permission!: number;
}

let user: User & Admin;

// type-assertions
user = new User() as User & Admin

user.name = "Edwin"
user.permission = 4


interface AJAXSETTINGS {
    url: string
}

let options = {} as AJAXSETTINGS
options.url = "codigofacilito.com"

// Type Alias
// Intersection Types
namespace Alias {

    class User {
        name: string = ""
    }
    class Admin {
        permission!: number;
    }

    type NumberOrString = number | string;
    let age: NumberOrString;

    type UserAdmin = User & Admin;
    let user: UserAdmin;

    type FuncString = () => string //funcion que solo regresa string

    function executor(f: FuncString, h: string) { };

    executor(() => "hola", "")
}


// Tuplas

let x: [string, number] = ["", 0];
x = ["hola", 0]
x = ["edwin", 54]
x = ["jose", 9988]

// console.log(x[])

// Enums

enum Tallas {
    chicas = 1,
    mediana = 2,
    grande = 3
}
class Pedido {
    talla!: number
}

let camisa:Pedido = new Pedido()

camisa.talla = Tallas.chicas

