function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(4, 6);
const RESULT = sum(4, 6);
console.log(RESULT);

function getName(firstName: string, lastName: string): string {
  return `Hello ${firstName} - ${lastName}`;
}
console.log(getName("Masoud", "Ramezani"));

function getDate(): Date {
  return new Date();
}
console.log(getDate());

function logger(value: any): void {
  console.log(value);
}

logger("ali")
