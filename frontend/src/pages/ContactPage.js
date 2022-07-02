import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Card from "react-bootstrap/Card";

export default function ContactPage(props) {
  const params = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact();
  }, [params.id]);

  const loadContact = async () => {
    const data = await contactAPI.getContactById(params.id);
    setContact(data);
  };

  const renderContact = () => {
    if (!contact) {
      return null;
    }

    return (
      <Card.Body style={{ width: "30%", marginLeft: "35%" }}>
        <Card.Title>
          {contact.first_name} {contact.last_name}
        </Card.Title>
        <Card.Text>{contact.address}</Card.Text>
        <Card.Text>
          {contact.city}, {contact.state} {contact.zip}
        </Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Link as={Link} to={`/contacts/${contact.id}/update`}>
          Update Contact
        </Card.Link>{" "}
        <Card.Link as={Link} to={`/contacts/${contact.id}/delete`}>
          Delete Contact
        </Card.Link>
      </Card.Body>
    );
  };
  return <Card>{renderContact()}</Card>;
}
