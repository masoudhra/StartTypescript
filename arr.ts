// Object.keys , key haye arrayamoon ro migire
function getKeys(obj: object): string[] {
  const keys: string[] = Object.keys(obj);
  return keys;
}
const user = {
  name: "Masoud Ramezani",
  age: 33,
  skill: "React",
};
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let numbers2: Array<number> = [7,8,9,4,5,6]
console.log(getKeys(user));
console.log(numbers);
console.log(numbers2)

