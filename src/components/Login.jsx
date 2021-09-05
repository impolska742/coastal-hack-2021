import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "6d7c5e6c-6946-4335-a1b1-c41b5fb9093b",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Oops, Enter correct credentials.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
                Login
              </span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </>
  );
};

export default Login;
