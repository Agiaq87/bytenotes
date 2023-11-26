import {Polygon} from 'polygon.js';

export class Rectangle extends Polygon {
    base;
    height;
    diagonal;
    perimeter;
    area;

    constructor(base, height) {
        if (base <= 0 || height <= 0) {
            throw new Error(
                `Negative value for ${base <= 0 ? "base" : ""} ${height <= 0 ? `${base <= 0 ? "and for" : ""} height` : ""}`
            )
        }
        super(4);
        this.base = base;
        this.height = height;
        this.diagonal = Math.sqrt(base * base + height * height);
        this.perimeter = (base + height)/2;
        this.area = base * height;
    }
}