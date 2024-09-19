"use client";
import { useStore } from "../Provider";
const Blog = () => {
  const storeData = useStore();
  console.log(storeData);
    return (
      <div>Hello world</div>
    );
  }
export default Blog;