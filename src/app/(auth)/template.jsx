"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forget Password", href: "/forgetPassword" },
];

export default function AuthLayout({ children }) {
    const [input, setInput] = useState("");
    const pathname = usePathname();
    return (
        <div>
          <>
         
          {children}
          </>
            
        </div>
    );
}
