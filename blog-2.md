
# How to handle asynchronous operations using async/await over callback/promise TypeScript.

### The way of handle asynchronous operations

#### Example:
```typescript
const createPromise = (): Promise<Data | string> => {
    return new Promise<Data | string>((resolve, reject) => {
        const data: Data = data1;
        if (data) {
            resolve(data);
        } else {
            reject("Sorry;");
        }
    })
}

// calling the promise
const showData = async (): Promise<Data | string> => {
    const data: Data | string = await createPromise();
    console.log(data);
    return data
}
```

This is the way how we can use async/await function.
