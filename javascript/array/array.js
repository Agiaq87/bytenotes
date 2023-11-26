class Square {
    side;
    diagonal;
    perimeter;
    area;

    constructor(side) {
        if (side <= 0 ) {
            throw new Error('Negative value for side');
        }
        this.side = side;
        this.diagonal = side * Math.sqrt(2);
        this.perimeter = side * 4;
        this.area = side * side;
    }
}

class Rectangle {
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
        this.base = base;
        this.height = height;
        this.diagonal = Math.sqrt(base * base + height * height);
        this.perimeter = (base + height)/2;
        this.area = base * height;
    }
}


function _makeSquares() {
    let array = [];

    for (let i = 1; i <= 10; i++) {
        array.push(new Square(i));
    }

    return array;
}

function _makeRectangles() {
    let array = [];

    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j <= 10; j++) {
            array.push(new Rectangle(i,j));
        }
    }

    return array;
}

function createList(arr, useImportantOnLast) {
    const returned = document.createElement("ul");
    let element;
    let string = "";

    arr.forEach((i, idx) => {
        console.log(i);
        element = document.createElement("li");

        if (i.base === undefined) {
            element.textContent = `Square side: ${i.side}, perimeter: ${i.perimeter}, area: ${i.area}`;
        } else {
            element.textContent = `Rect base: ${i.base}, height: ${i.height}, perimeter: ${i.perimeter}, area: ${i.area}`;
        }

        if (useImportantOnLast && idx === arr.length-1) {
            element.setAttribute("class", "important-marker");
        }

        returned.appendChild(element);        
    })

    return returned;
}

function setup() {
    console.log("start array");

    const rects = _makeRectangles();
    const squares = _makeSquares();

    console.log(rects);
    console.log(squares);

    const arr = [...rects, ...squares];
    console.log(arr);

    document.getElementById('list').appendChild(createList(arr, false));

    arr.push(new Rectangle(7.5,2.5));
    console.log(arr);

    document.getElementById('push').appendChild(createList(arr, true));

    document.getElementById('print').innerHTML = `Rects and squares created, num of elements in array with lenght: <strong>${arr.length}</strong>`;
    
    const filter = arr.filter(i => i.base !== undefined);
    console.log(filter);

    document.getElementById('filter').innerHTML = `Filter rectangles in array, obtain new array with ${filter.length} rectangles`;
}