//As const
const user: object = {
  fullName: "Masoud Ramezani",
  age: 33,
  email: "masoud@gmail.com",
  password: "hjkbfjbhv",
} as const;
// user.fullName = "Ali"; // emal nemishe chon az as const estefade kardim
console.log(user);

const numbers = [1, 5, 10]as const;
console.log(numbers[0])
console.log(numbers)

