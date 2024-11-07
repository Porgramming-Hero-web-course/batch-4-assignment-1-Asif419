type People = {
    name: string;
    age: number;
}

const getProperty = <T, U extends keyof T>(obj: T, key: U): any => {
    return obj[key];
}


const person: People = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
