import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CheckLoginPage from "./pages/CheckLoginPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
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
        </Routes>
      </Router>
    </div>
  );
}
