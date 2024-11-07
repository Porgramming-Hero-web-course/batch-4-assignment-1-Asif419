type Person = {
    name: string;
    age: number;
    email: string;
}

const validateKeys = <T extends object>(person: T, properties: (keyof T)[]): boolean => {

    // console.log(properties)

    for (const property of properties) {
        if (!(property in person)) {
            return false;
        }
    }
    return true;
}


const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));