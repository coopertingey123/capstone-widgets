import { useState } from "react";
import Logo from "./logo.svg";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Logged In") {
          props.setAuthToken(true);
        }
      })
      .catch((err) => {
        console.error("Login Error: ", err);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="top-side">
        <img src={Logo} alt="" />
      </div>
      <div className="bottom-side">
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <div className="button">
          <button onClick={submit}>Login</button>
        </div>
      </div>
    </div>
  );
}
