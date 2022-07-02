import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateContactPage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact();
  }, [params.id]);

  const loadContact = async () => {
    const data = await contactAPI.getContactById(params.id);
    setContact(data);
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const contactData = {
      first_name: evt.target.elements[0].value,
      last_name: evt.target.elements[1].value,
      address: evt.target.elements[2].value,
      city: evt.target.elements[3].value,
      state: evt.target.elements[4].value,
      zip: evt.target.elements[5].value,
      phone: evt.target.elements[6].value,
      email: evt.target.elements[7].value,
    };

    const data = await contactAPI.updateContact(params.id, contactData);
    setContact(data);
    navigate(-1);
  };

  const renderContact = () => {
    if (!contact) {
      return null;
    }

    return (
      <Form
        onSubmit={handleFormSubmit}
        style={{ width: "30%", marginLeft: "35%" }}
      >
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" defaultValue={contact.first_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" defaultValue={contact.last_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" defaultValue={contact.address} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" defaultValue={contact.city} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" defaultValue={contact.state} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" defaultValue={contact.zip} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" defaultValue={contact.phone} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" defaultValue={contact.email} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add New Contact
        </Button>
      </Form>
    );
  };
  return <div>{renderContact()}</div>;
}
