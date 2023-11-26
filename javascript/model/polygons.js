import {Square} from './square';
import {Rectangle} from './rectangle';



function makeSquares() {
    let array = [];

    for (let i = 1; i <= 10; i++) {
        array.push(new Square(i));
    }

    return array;
}

function makeRectangles() {
    let array = [];

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            array.push(new Rectangle(i,j));
        }
    }
}



export function polygons() {
    return [
        ...makeSquares(),
        ...makeRectangles(),
    ];
}