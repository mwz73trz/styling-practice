import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CheckLoginPage from "./pages/CheckLoginPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CreateContactPage from "./pages/CreateContactPage";
import UpdateContactPage from "./pages/UpdateContactPage";
import DeleteContactPage from "./pages/DeleteContactPage";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="contacts/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <ContactPage username={username} />}
              />
            }
          />
          <Route
            path="contacts/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateContactPage username={username} />}
              />
            }
          />
          <Route
            path="contacts/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateContactPage username={username} />}
              />
            }
          />
          <Route
            path="contacts/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteContactPage username={username} />}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
