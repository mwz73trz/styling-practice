import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Contacts from "../components/Contacts";
import ListGroup from "react-bootstrap/ListGroup";

export default function HomePage(props) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, [props.username]);

  const loadContacts = async () => {
    const data = await contactAPI.getContacts();
    setContacts(data ? data : []);
  };

  const renderContacts = () => {
    return contacts.map((contact, index) => {
      return (
        <ListGroup.Item key={index} as="li">
          <Contacts contact={contact} />
        </ListGroup.Item>
      );
    });
  };
  return (
    <ListGroup
      as="ul"
      style={{ listStyle: "none", width: "30%", marginLeft: "35%" }}
    >
      <h1>{props.username}'s Contacts</h1>
      {renderContacts()}
      <Link to="/contacts/add">Create New Contact</Link>
    </ListGroup>
  );
}
