import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate, Link } from "react-router-dom";
import contactAPI from "../api/contactAPI";

export default function NavBar(props) {
  const navigate = useNavigate();

  const doLogout = async () => {
    const data = await contactAPI.logout();
    if (data) {
      props.setUsername("");
      navigate("/");
    }
  };

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <Container>
          <Navbar.Brand as={Link} to="/">
            Contacts App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      );
    }

    return (
      <Container>
        <Navbar.Brand as={Link} to="/">
          Contacts App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="#" onClick={doLogout}>
            Logout
          </Nav.Link>
          <Nav.Link>Hello, {props.username}</Nav.Link>
        </Nav>
      </Container>
    );
  };
  return (
    <Navbar bg="dark" variant="dark">
      {renderAuthItems()}
    </Navbar>
  );
}
