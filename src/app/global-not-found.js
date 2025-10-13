import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "404 - Page Not Found",
};

export default function GlobalNotFound() {

    return ( 
            <html lang='en'>
            <body
            
                style={{
                    color: "black",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <h1
                    className='text-[80px] font-extrabold mb-4'
                    style={{
                        background:
                            "linear-gradient(90deg, #2b1055, #7597de, #6c63ff, #c471ed)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "7rem",
                        marginBottom: "1rem",
                    }}>
                    Oops!
                </h1>
                <h3 style={{ color: "white" }}>404 - Page Not Found</h3>
                <p style={{ marginBlock: "1.5rem", color: "white" }}>
                    The page you requested doesn’t exist.
                </p>
                <Link
                    href='/'
                    style={{
                        padding: "0.75rem 1.5rem",
                        background:
                            "linear-gradient(190deg, #2b1055, #7597de, #6c63ff, #c471ed)",
                        color: "white",
                        borderRadius: "8px",
                        textDecoration: "none",
                    }}>
                    Back Home
                </Link>
            </body>
        </html>
 
        
    );
}
