interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = <T extends object, U extends Partial<T>>(currentProfile: T, updatePart: U) => {


    const keysOfUpdatedInfo: string[] = Object.keys(updatePart);
    // console.log(keysOfUpdatedInfo)

    keysOfUpdatedInfo.forEach(property => {
        if (property in currentProfile) {
            currentProfile[property] = updatePart[property]
        }
        // console.log(currentProfile[property])
        // console.log(updatePart[property])
    })

    return currentProfile;

}

const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
