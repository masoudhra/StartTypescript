let BlogTitle: string = "this is first blog about typescript";
console.log(typeof BlogTitle);
let blogLikesCount = 90;
console.log(typeof blogLikesCount);
let isActive = true;
console.log(typeof isActive);

let user: typeof BlogTitle;

user = "Masoud";
let str: string = `my blog has ${blogLikesCount} likes`;
console.log(str);

// type inference
let var1 = "string kdkdkd";
let var2 = 25;
let var3 = { key: "value" };

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
