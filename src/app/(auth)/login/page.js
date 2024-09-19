
"use client";
export default function Login() {
  const num = Math.random();
  if(num < 0.5) {
    throw new Error("som error occured");
  }
    return (
      <div>
        This is Login Page
      </div>
    );
  }
  