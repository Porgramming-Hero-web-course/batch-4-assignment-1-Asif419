
# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


#### Types guards are necessary because:
1. Type Safety
    - During using of union types we may use multiple types of variables then type guards can help to handle types perfectly.
2. Prevent runtime error
    - Guards check and validate type of a variable so there are less possibility to get runtime error.

    
### Various types of type guards

## typeof guard

#### Example:
```typescript
    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') { //type guard
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }
```

---

## in guard

#### Example:
```typescript
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "Admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) { //in guard
            console.log(`${user.name} is ${user.role}`);
        }
        else {
            console.log(`${user.name} you are not admin`);
        }
    }

    const normalUser: NormalUser = {
        name: "Asif",
    }

    const adminUser: AdminUser = {
        name: "Shahariar",
        role: "Admin",
    }

    getUser(normalUser);
    getUser(adminUser);
```

---

## instance of guard

#### Example:
```typescript
    class Animal {
      name: string;
      species: string;

      constructor(name: string, species: string) {
          this.name = name;
          this.species = species;
      }

      makeSound() {
          console.log("Making sound");
      }
  }

  class Dog extends Animal {
      constructor(name: string, species: string) {
          super(name, species)
      }

      makeBark() {
          console.log("Barking")
      }
  }

  class Cat extends Animal {
      constructor(name: string, species: string) {
          super(name, species)
      }

      markMew() {
          console.log("Mewing")
      }
  }

  const isDog = (animal: Animal): animal is Dog => {
      // boolean return type will not work properly
      return animal instanceof Dog
  }

  const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat
  }

  const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
          animal.makeBark();
      } else if (isCat(animal)) {
          animal.markMew();
      }
      else {
          animal.makeSound()
      }
  }

  const dog = new Dog("Dog", "dog");
  const cat = new Cat("Cat", "cat");
```