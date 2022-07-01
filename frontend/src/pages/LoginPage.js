import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";

export default function LoginPage(props) {
  const navigate = useNavigate();

  const handleLogin = async (evt) => {
    evt.preventDefault();

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await contactAPI.login(loginData);
    if (data) {
      props.setUsername(data.username);
      navigate("/");
    }
  };
  return (
    <Form
      style={{ width: "30%", marginLeft: "35%" }}
      onSubmit={handleLogin}
      method="POST"
    >
      <h1>User Login</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
        <Form.Text className="text-muted">Enter your username</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Enter your password</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}
