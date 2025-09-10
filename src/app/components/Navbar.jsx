"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/terminal.svg";
// import Image from "next/image";
// import Pen from "./Pen";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <Navbar
            style={{
                backgroundColor: "#1e2939",
                padding: "15px",
                fontSize: "17px",
            }}
            variant="dark" // Ensures text is light-colored
            expand="lg"
            className="fixed-top "
        >
            <Container fluid className="mx-5">
                <Navbar.Brand as={Link} href="/">
                    <div className="d-flex items-center gap-3">
                        <span className="text-gray-100 text-2xl font-bold leading-tight tracking-tight">
                            Tech Innovators of Sudan
                        </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto gap-4 align-items-center">
                        <Nav.Link as={Link} href="/" active={pathname === "/"}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/article"
                            active={pathname === "/article"}
                        >
                            Articles
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/projects"
                            active={pathname === "/projects"}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/community"
                            active={pathname === "/community"}
                        >
                            Community
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/community"
                            active={pathname === "/community"}
                            style={{
                                backgroundColor: "#ea2a33",
                                borderRadius: "20px",
                                color: "white",
                                fontWeight: "bold",
                                padding: "10px 20px",
                            }}
                        >
                            Join us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
