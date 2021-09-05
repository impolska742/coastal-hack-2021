import { useState } from "react";
import axios from "axios";
import "./sign-up.css";

const SignUp = () => {
  // https://api.chatengine.io/users/
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const authObject = {
    "Project-ID": "6d7c5e6c-6946-4335-a1b1-c41b5fb9093b",
    "PRIVATE-KEY": "b819a619-b86d-403c-afd9-35bd2cb1bd35",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://api.chatengine.io/users/",
        {
          username: userName,
          first_name: firstName,
          last_name: lastName,
          secret: password,
        },
        { headers: authObject }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);

    setUserName("");
    setFirstName("");
    setLastName("");
    setPassword("");

    window.location.reload();
  };

  return (
    <div className="signup-form" onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input"
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Password"
          required
        />

        <div align="center">
          <button type="submit" className="btn button">
            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Sign up
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
