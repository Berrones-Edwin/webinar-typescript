interface Coords {
    x: number;
    y: number;
    z?: number;
}

class Point3D {

    private coord: Required<Coords>
    constructor(coord: Coords) {
        this.coord = {
            ...coord,
            z: coord.z || 0
        };
    }
    getZ() {
        return this.coord.z;
    }
}

const myObj = new Point3D({ x: 1, y: 3 })
console.log(myObj.getZ());
