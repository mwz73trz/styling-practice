import { Link } from "react-router-dom";

export default function Contacts(props) {
  return (
    <div>
      <Link to={`contacts/${props.contact.id}`}>
        {props.contact.last_name}, {props.contact.first_name}
      </Link>
    </div>
  );
}
