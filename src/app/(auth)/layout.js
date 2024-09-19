"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }) {
  const navLinks = [{label: 'Login', path: '/login'}, {label: 'Logout', path: '/logout'}, {label: 'signup', path: '/signup'}];
  const pathname = usePathname();
  const [name, setName] = useState("");
  return (
      <div>
          <div className=" flex flex-row gap-4">
              { navLinks.map((item) => (
                <div key={item.path} className={`${pathname.startsWith(item.path) ?  'text-red-400' : ''}`}>
                  <Link href={item.path}>{item.label}</Link>
                </div>
              ))}
          </div>

          {/*
            Below input field is the example of template
                layout don't remount shared components resulting in better performance.
                input elements data is not remounted if you swith between routes.
                state and instance is preserved.

                Rename this file to template.js
                --------------------------------
                now this acts as template component. the state of input field is not preserved if you navigate betwenn the routes of login, sinup, logout.
                if you switch the route then input fields resets and remounts.
          */}
          <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
          {children}
      </div>
  );
}
