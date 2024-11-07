
# The Significance of Union and Intersection Types in TypeScript

### Union Type

A union type allows us to select one type among multiple types.

#### Example:
```typescript
type Party = 'Lunch' | 'Dinner';
type Tour = 'Ctg' | 'Coxs';
type Vote = Party | Tour;

const myVote: Vote = 'Ctg';
```

In the example above, the `Vote` type can be either a `Party` or a `Tour`. This provides flexibility when declaring variables and allows us to use any of the specified types.

#### Significance of Union Type in TypeScript:
1. Provides flexibility in variable declaration, and in argument and parameter typing.

---

### Intersection Type

An intersection type combines multiple types into a single type, allowing us to create a new type that includes all properties of the combined types.

#### Example:
```typescript
type Bowler = {
    name: string;
    bowler: 'spin' | 'fast';
};

type Batsman = {
    name: string;
    batsman: 'left' | 'right';
};

type AllRounder = Bowler & Batsman;

const player1: AllRounder = {
    name: 'Sakib',
    bowler: 'spin',
    batsman: 'left',
};
```

In this example, `AllRounder` is a type that combines both `Bowler` and `Batsman`, meaning it has all the properties of both types.

#### Significance of Intersection Type in TypeScript:
1. Useful for creating a new type from existing types, where all properties, both common and unique, are included.
