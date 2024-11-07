type genericArray<T> = Array<T>;

const removeDuplicates = <T>(numbers: T[]): T[] => {
    const plainNumbers: genericArray<T> = [];
    numbers.map((num => {

        if(!plainNumbers.includes(num)){
            plainNumbers.push(num);
        }
        
        return plainNumbers;
    }));
    
    return plainNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));