class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge = () => {
        const currentYear = 2024;
        return currentYear - this.year;
    }
}

// Sample Input 1:
const car = new Car("Honda", "Civic", 2020);
console.log(car.getCarAge());