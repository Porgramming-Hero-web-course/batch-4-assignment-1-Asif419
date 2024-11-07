type NumberArray = number[];


const sumArray = (array: NumberArray): number => {
    let sum: number = 0;

    for (let i: number = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
