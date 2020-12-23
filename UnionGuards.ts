interface Human {
    sleep: () => void;
}
interface Man extends Human {
    moustache: boolean;
}
interface Woman extends Human {
    longHair: boolean;
}
const randomBool = (): boolean => Boolean(Math.round(Math.random()))

const randomMan = (): Man => ({
    moustache: randomBool(),
    sleep: () => console.log('man zzzz')
});
const randomWoman = (): Woman => ({
    longHair: randomBool(),
    sleep: () => console.log('man zzzz')
});

// Union
const getRandomPerson = (): Woman | Man =>
    randomBool() ? randomWoman() : randomMan();

const person = getRandomPerson();

// Guards
if ("moustache" in person)
    console.log(person.moustache)
else if ("longHair" in person)
    console.log(person.longHair)
