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

    for (let i = 2; i <= 4; i++) {
        array.push(new Square(i));
    }

    return array;
}

function _makeRectangles() {
    let array = [];

    for (let i = 1; i <= 2; i++) {
        for (let j = 3; j <= 4; j++) {
            array.push(new Rectangle(i,j));
        }
    }

    return array;
}

function makeTextContent(i) {
    if (i.base === undefined && i.side) {
        return `Square side: ${i.side}, perimeter: ${i.perimeter}, area: ${i.area}`;
    } else if(i.base) {
        return `Rect base: ${i.base}, height: ${i.height}, perimeter: ${i.perimeter}, area: ${i.area}`;
    } else {
        return `Value: ${i}`;
    }
}

function makeTextBetweenList(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    return paragraph;
}

function createList(arr, useImportantOnLast, useImportantOnFirst) {
    const container = document.createElement("div");
    const ul = document.createElement("ul");

    container.appendChild(ul);
    let element;

    arr.forEach((i, idx) => {
        console.log(i);
        element = document.createElement("li");

        element.textContent = makeTextContent(i);

        if (
            (useImportantOnLast && idx === arr.length-1) ||
            (useImportantOnFirst && idx === 0)
        ) {
            element.setAttribute("class", "important-marker");
        }

        ul.appendChild(element);        
    })
    
    return container;
}

function listSection() {
    console.log('Before list', "make array");

    const arr = [..._makeRectangles(), ..._makeSquares()];
    document.getElementById('list').appendChild(createList(arr, false, false));

    console.log('After list', arr);

    return arr;
}

function pushSection(arr) {
    console.log('Before push', arr);

    arr.push(new Rectangle(7.5,2.5));
    document.getElementById('push').appendChild(createList(arr, true, false));

    console.log('After push', arr);
}

function popSection(arr) {
    console.log('Before pop', arr);

    const popped = arr.pop();
    document.getElementById('pop').appendChild(createList(arr, false, false));
    const showPoppedElement = document.createElement("p");
    showPoppedElement.textContent = `Element deleted with pop:`;
    document.getElementById('pop').appendChild(showPoppedElement);
    document.getElementById('pop').appendChild(createList([popped], true, false));

    console.log('After pop', arr, 'item popped', popped);
}

function unshiftSection(arr) {
    console.log('Before unshift', arr);

    arr.unshift(new Rectangle(7.5,2.5));
    document.getElementById('unshift').appendChild(createList(arr, false, true));

    console.log('After unshift', arr);
}

function shiftSection(arr) {
    console.log('Before shift', arr);

    const shifted = arr.shift();
    document.getElementById('shift').appendChild(createList(arr,false, false));
    const showShiftedElement = makeTextBetweenList(`Element deleted with shift:`);
    document.getElementById('shift').appendChild(showShiftedElement);
    document.getElementById('shift').appendChild(createList([shifted], false, false));

    console.log('After shift', arr, 'item shifted', shifted);
}

function fifoSection(arr) {
    pushSection(arr);
    popSection(arr);
}

function lifoSection(arr) {
    unshiftSection(arr);
    shiftSection(arr);
}


function spliceSection() {
    document.getElementById("splice-list").appendChild(createList(originalArray, false, false));
}

function spliceSectionOneParameter() {
    let originalArray = listSection();
    const value = document.getElementById("splice-one-input").value;
    console.log('Before splice', originalArray, value);

    const elementTransform = document.getElementById("splice-one-transform");
    const elementRemoved = document.getElementById("splice-one-removed")
    
    if (elementTransform.children.length > 0) {
        for(const c of elementTransform.children) {
            c.remove();
        }
    }

    if (elementRemoved.children.length > 0) {
        for (const c of elementRemoved.children) {
            c.remove();
        }
    }
    
    const tempArray = originalArray;
    const removed = originalArray.splice(value);
    
    elementTransform.appendChild(createList(tempArray, false, false));
    elementRemoved.appendChild(createList(removed, false, false));

    console.log('After splice', tempArray, removed);
}


function spliceSectionTwoParameter() {
    let originalArray = listSection();
    const valueOne = document.getElementById("splice-two-input-one").value;
    const valueTwo = document.getElementById("splice-two-input-two").value;
    console.log('Before splice', originalArray, valueOne, valueTwo);

    const elementTransform = document.getElementById("splice-one-transform-two");
    const elementRemoved = document.getElementById("splice-one-removed-two")
    
    if (elementTransform.children.length > 0) {
        for(const c of elementTransform.children) {
            c.remove();
        }
    }

    if (elementRemoved.children.length > 0) {
        for (const c of elementRemoved.children) {
            c.remove();
        }
    }
    
    const tempArray = originalArray;
    const removed = originalArray.splice(valueOne, valueTwo);
    
    elementTransform.appendChild(createList(tempArray, false, false));
    elementRemoved.appendChild(createList(removed, false, false));

    console.log('After splice', tempArray, removed);
}

function spliceSectionThreeParameter() {
    let originalArray = listSection();
    const valueOne = document.getElementById("splice-three-input-one").value;
    const valueTwo = document.getElementById("splice-three-input-two").value;
    const valueThree = document.getElementById("splice-three-input-three").value;
    console.log('Before splice', originalArray, valueOne, valueTwo, valueThree);

    const elementTransform = document.getElementById("splice-three-transform");
    const elementRemoved = document.getElementById("splice-three-removed")
    
    if (elementTransform.children.length > 0) {
        for(const c of elementTransform.children) {
            c.remove();
        }
    }

    if (elementRemoved.children.length > 0) {
        for (const c of elementRemoved.children) {
            c.remove();
        }
    }
    
    const tempArray = originalArray;
    const removed = originalArray.splice(valueOne, valueTwo, ...valueThree);
    
    elementTransform.appendChild(createList(tempArray, false, false));
    elementRemoved.appendChild(createList(removed, false, false));

    console.log('After splice', tempArray, removed);
}


function setup() {
    const arr = listSection();
    originalArray = listSection();
    
    fifoSection(arr);

    lifoSection(arr);

    spliceSection();

    //document.getElementById('print').innerHTML = `Rects and squares created, num of elements in array with lenght: <strong>${arr.length}</strong>`;
    
    /*const filter = arr.filter(i => i.base !== undefined);
    console.log(filter);

    document.getElementById('filter').innerHTML = `Filter rectangles in array, obtain new array with ${filter.length} rectangles`;*/
}