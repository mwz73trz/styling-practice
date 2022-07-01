import { useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateContactPage(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const contactData = {
      first_name: evt.target.elements["first_name"].value,
      last_name: evt.target.elements["last_name"].value,
      address: evt.target.elements["address"].value,
      city: evt.target.elements["city"].value,
      state: evt.target.elements["state"].value,
      zip: evt.target.elements["zip"].value,
      phone: evt.target.elements["phone"].value,
      email: evt.target.elements["email"].value,
    };

    const data = await contactAPI.createContact(contactData);
    if (data) {
      navigate("/");
    }
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      style={{ width: "30%", marginLeft: "35%" }}
    >
      <Form.Group className="mb-3" controlId="first_name">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="last_name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="zip">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Contact
      </Button>
    </Form>
  );
}
