import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const auth = getAuth();
const Navbars = () => {
  const logOutbuton = localStorage.getItem("auth");

  return (
    <div>
      <Navbar className="navbar_color">
        <Container>
          <div style={{ width: "100%" }}>
            <Nav className="me-auto">
              <Nav.Link href="/listing" style={{ color: "black" }}>
                All Books
              </Nav.Link>
              <Nav.Link href="/addbook" style={{ color: "black" }}>
                Add Books
              </Nav.Link>
              <div className="nav_login">
                {logOutbuton === "login hu bhai yaar" ? (
                  <>
                    {" "}
                    <Nav.Link
                      href="/"
                      style={{ color: "black" }}
                      onClick={() => localStorage.clear()}
                    >
                      Log Out
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <Nav.Link
                      href="/"
                      style={{ color: "black" }}
                      onClick={() => {
                        localStorage.removeItem("signup");
                        localStorage.setItem("login", "bhai login hu");
                      }}
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      href="/"
                      style={{ color: "black" }}
                      onClick={() => {
                        localStorage.removeItem("login");
                        localStorage.setItem("signup", "bhai signup hu");
                      }}
                      // onClick={() =>
                      //   localStorage.setItem("signup", "bhai signup hu")
                      // }
                    >
                      Sign Up
                    </Nav.Link>
                  </>
                )}
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
