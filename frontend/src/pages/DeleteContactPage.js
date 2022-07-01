import { useParams, useNavigate } from "react-router-dom";
import contactAPI from "../api/contactAPI";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function DeleteContactPage(props) {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate(-1);
  };

  const deleteContact = async () => {
    const data = contactAPI.deleteContact(params.id);
    if (data) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Delete Contact</h1>
      <Alert variant="danger">
        Are you sure you want to delete this contact?
      </Alert>
      <Button variant="danger" onClick={deleteContact}>
        Yes
      </Button>
      <Button variant="secondary" onClick={cancelDelete}>
        No
      </Button>
    </div>
  );
}
