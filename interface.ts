interface InterfacePerson {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  email: string;
}

function newUser(person: InterfacePerson): InterfacePerson {
  return person;
}
let personData: InterfacePerson = {
    firstName: "Masoud",
    lastName: "Ramezani",
    age: 33,
    username: "masoud.com",
    email: "masoud@google.com"
}
console.log(newUser(personData));
