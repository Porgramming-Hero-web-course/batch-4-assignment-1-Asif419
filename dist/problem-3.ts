

const countWordOccurrences = (sentence: string, checker: string): number => {

    let count: number = 0;

    const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];

    words.forEach(word => {
        if (word == checker.toLocaleLowerCase()) {
            count += 1;
        }
    })

    return count;
}


console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));