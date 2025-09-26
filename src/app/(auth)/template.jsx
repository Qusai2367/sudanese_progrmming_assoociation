"use client";

import Link from "next/link";
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
            {/* <div>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div> */}
            {/* {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={
                            isActive
                                ? "fontbold mr-4"
                                : "text-gray-500 mr-4 bg-gray-100 decoration-none b"
                        }
                    >
                        {link.name}
                    </Link>
                );
            })} */}
            {children}
        </div>
    );
}
