import { Polygon } from 'polygon.js';

export class Square extends Polygon {
    side;
    diagonal;
    perimeter;
    area;

    constructor(side) {
        if (side <= 0 ) {
            throw new Error('Negative value for side');
        }
        super(4);
        this.side = side;
        this.diagonal = side * Math.sqrt(2);
        this.perimeter = side * 4;
        this.area = side * side;
    }
}