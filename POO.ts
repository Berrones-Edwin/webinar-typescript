namespace CF {
    export class Game {

    };
    export interface Video {

    };
}
interface Asset {
    x, y, width, height: number;
}
namespace CF_1{

    export abstract class Asset{
        x: number = 0;
        y: number = 0;
        width: number = 0;
        height: number = 0;
        getCoords():string { return `${this.x},${this.y} ` }
        abstract move(speed:number) :boolean
    }
}

class Hero implements Asset{
    x: number;
    y: number;
    width: number;
    height: number;

}
class Enemy extends CF_1.Asset{

    move(speed: number): boolean {
        throw new Error("Method not implemented.");
    }

}

let hero:Asset = new Hero();

class Person {
    private _name: string;
    private lastname: string;

    constructor(
        name: string,
        lastname: string
    ) {
        this._name = name
        this.lastname = lastname
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name
    }
    speak(words: string) {
        console.log(words)
    }
    walk() {
        console.log('walk')
    }
}

class Employee extends Person {


    constructor(
        name: string,
        lastname: string
    ) {
        super(name, lastname)
    }
    speak(words: string) {
        super.speak(words);
    }
    walk() {
        super.walk()
    }

}

