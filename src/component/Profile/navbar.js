import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.css";
function Navigation() {
  return (
    <Navbar bg="dark sticky-top p-0" expand="lg">
      <Container>
        <h1>
          <span>C</span>ODING
        </h1>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="ms-auto my-2 my-lg-0  ">
            <links className="text-white d-flex">
              <li>
                {" "}
                <a href="#1">Home</a>
              </li>
              <li>
                {" "}
                <a href="#2">Services</a>
              </li>
              <li>
                {" "}
                <a href="#">About Us</a>
              </li>
              <li>
                {" "}
                <a href="#3">User</a>
              </li>
            </links>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
