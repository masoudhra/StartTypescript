import { log } from "console";
import { title } from "process";

// readonly
const Name: string = "Ali";
interface IBlog {
  readonly title: string;
  readonly text: string;
}

type IBlog2 = {
  readonly title: string;
  readonly text: string;
};

function newBlog(blog: IBlog): IBlog {
  return blog;
}
const blog = newBlog({ title: "blog title", text: "blog text" });
console.log(blog);
