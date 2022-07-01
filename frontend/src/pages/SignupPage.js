import { useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignupPage(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const formData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await contactAPI.signup(formData);
    if (data) {
      navigate("/login");
    }
  };
  return (
    <Form
      style={{ width: "30%", marginLeft: "35%" }}
      onSubmit={handleFormSubmit}
      method="POST"
    >
      <h1>User Sign Up</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
        <Form.Text className="text-muted">Enter a username</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Enter a password</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
