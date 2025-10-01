"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import { useAuth } from "@/app/Context/AuthContext";
import ThemeSwitcher from "./Theme";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false); // لتجنب hydration mismatch
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setMounted(true); // بعد ما الكمبوننت اتعمل mount، نعرض Navbar
  }, []);

  if (!mounted) return null; // قبل الماونت، ما نعرضش حاجة

  return (
    <>
      <style>
        {`
        .navbar-dark .navbar-nav .nav-link:not(.join-us-btn) {
          color: rgb(179, 167, 167);
          position: relative;
          padding-bottom: 0.5rem;
          transition: color 0.2s ease-in-out;
        }

        .light .navbar-dark .navbar-nav .nav-link:not(.join-us-btn) {
          color: rgb(55, 57, 58);
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
          background-color: #ea2a33;
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
        onToggle={() => setExpanded(!expanded)}
        collapseOnSelect
        style={{ backgroundColor: "#1e2939", padding: "15px", fontSize: "17px" }}
        variant="dark"
        expand="lg"
        className="fixed-top custom-nav"
      >
        <Container>
          <Navbar.Brand as={Link} href="/">
            <div className="d-flex items-center gap-3">
              <Image
                src={logo}
                alt="Association logo"
                width={70}
                height={70}
                style={{ maxWidth: "100%", height: "auto" }}
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
            className={`offcanvas offcanvas-end ${
              theme === "light" ? "offcanvasbackground-light" : "offcanvasbackground"
            }`.trim()}
          >
            <Offcanvas.Header closeButton className="text-white">
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">
                SPA
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="ms-auto d-flex text-white flex-wrap gap-4 align-items-center justify-content-end"
                onSelect={() => setExpanded(false)}
              >
                <Nav.Link as={Link} href="/" active={pathname === "/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} href="/article" active={pathname === "/article"}>
                  Articles
                </Nav.Link>
                <Nav.Link as={Link} href="/about" active={pathname === "/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} href="/services" active={pathname === "/services"}>
                  Services
                </Nav.Link>
                <Nav.Link as={Link} href="/community" active={pathname === "/community"}>
                  Community
                </Nav.Link>
                <Nav.Link as={Link} href="/contact" active={pathname === "/contact"}>
                  Contact
                </Nav.Link>

                {user ? (
                  <button
                    onClick={logout}
                    className="btn"
                    style={{
                      backgroundColor: "#ea2a33",
                      borderRadius: "20px",
                      color: "white",
                      fontWeight: "bold",
                      padding: "10px 20px",
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <Nav.Link
                    as={Link}
                    href="/login"
                    active={pathname === "/login"}
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
                )}

                <ThemeSwitcher />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
