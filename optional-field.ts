function sayHello(firstName?: string, lastName?: string):void {
  console.log(`Hi ${firstName || "New User"} ${lastName || ''} welcome to our website.`);
}
sayHello();
let blog: {
    title: string,
    test: string,
    likes: number,
    author: object,
    comments?: Array<object> | object[]
}

blog = {
    title: "new title",
    test: "new test",
    likes: 0,
    author: {name: "Masoud"},
    comments: []
}
console.log(blog.likes)
console.log(blog)