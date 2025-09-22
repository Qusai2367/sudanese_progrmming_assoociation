"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import Image from "next/image";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <style>
                {`
                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn) {
                        color: #adb5bd; /* Lighter gray for better visibility */
                        position: relative;
                        padding-bottom: 0.5rem; /* Space for the underline */
                        transition: color 0.2s ease-in-out;
                    }

                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn):hover,
                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn).active {
                        color: #fff;
                    }

                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn)::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0;
                        height: 2px;
                        background-color: #ea2a33; /* Brand's red color */
                        transition: width 0.3s ease-in-out;
                    }

                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn):hover::after,
                    .navbar-dark .navbar-nav .nav-link:not(.join-us-btn).active::after {
                        width: 100%;
                    }
                `}
            </style>
            <Navbar
                expanded={expanded}
                style={{
                    backgroundColor: "#1e2939",
                    padding: "15px",
                    fontSize: "17px",
                }}
                variant="dark" // Ensures text is light-colored
                expand="lg"
                className="fixed-top "
                onToggle={() => setExpanded(!expanded)}
                collapseOnSelect
            >
                <Container className="">
                    <Navbar.Brand as={Link} href="/">
                        <div className="d-flex items-center gap-3 ">
                            <Image
                                src={logo}
                                alt="Association logo"
                                className="img-fluid"
                                width={70}
                                height={70}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbarNav"
                        onClick={() => setExpanded(!expanded)}
                        className="text-white"
                    />
                    <Navbar.Offcanvas
                        id="navbarNav"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        style={{ backgroundColor: "#1e2939" }}
                    >
                        <Offcanvas.Header closeButton className="text-white">
                            <Offcanvas.Title
                                id="offcanvasNavbarLabel"
                                className="text-white"
                            >
                                SPA
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav
                                className="ms-auto d-flex text-white flex-wrap gap-4 align-items-center justify-content-end"
                                onSelect={() => setExpanded(false)}
                            >
                                <Nav.Link
                                    as={Link}
                                    href="/"
                                    active={pathname === "/"}
                                >
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
                                    href="/about"
                                    active={pathname === "/about"}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    href="/service"
                                    active={pathname === "/service"}
                                >
                                    Services
                                </Nav.Link>

                                <Nav.Link
                                    as={Link}
                                    href="/projects"
                                    active={pathname === "/projects"}
                                >
                                    Project
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    href="/contact"
                                    active={pathname === "/contact"}
                                >
                                    Contact
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    href="/community"
                                    active={pathname === "/community"}
                                    className="join-us-btn"
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
                                <Nav.Link
                                    as={Link}
                                    href="/login"
                                    active={pathname === "/login"}
                                    className="join-us-btn"
                                    style={{
                                        backgroundColor: "#1773dbff",
                                        borderRadius: "20px",
                                        color: "white",
                                        fontWeight: "bold",
                                        padding: "10px 20px",
                                    }}
                                >
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
