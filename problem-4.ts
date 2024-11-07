type Circle = {
    shape: string;
    radius: number;
}

type Rectangle = {
    shape: string;
    width: number;
    height: number;
}

type CircleOrRectangle = Circle | Rectangle;

// check point a number is float or not and finally return a float number of 2 decimal point
const isFloat = (num: number): number => {
    if (!Number.isInteger(num) && typeof num != 'string') {
        num = Number(num.toFixed(2));
    }
    return num;
}


// checking point for given object (is it circle or not)
const isCircle = (obj: CircleOrRectangle): obj is Circle => {
    return (obj as Circle).shape == 'circle';
}

// checking point for given object (is it rectangle or not)
const isRectangle = (obj: CircleOrRectangle): obj is Circle => {
    return (obj as Circle).shape == 'rectangle';
}

const calculateShapeArea = (obj: CircleOrRectangle): number => {
    let area: any;

    if (isCircle(obj)) {
        area = Math.PI * obj.radius * obj.radius as number;
        area = isFloat(area);
    }
    else if (isRectangle(obj)) {
        area = Math.round(obj.width * obj.height as number);
        area = isFloat(area);
    }
    else {
        area = `Please provide shape as 'circle' or 'rectangle'` as string;
    }

    return area;
}



const circleArea = calculateShapeArea({ shape: "circle", radius: 8 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);