import { BrowserRouter as Router, Link } from "react-router-dom";

export default function SideBar(props) {
  function logout() {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        props.setAuthToken(false);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.error("Login Error: ", err);
      });
  }

  return (
    <div className="sidebar-wrapper">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/color-slider">Color Slider</Link>
      </div>
      <div className="link">
        <Link to="/weather">Weather api</Link>
      </div>
      <div className="link">
        <Link to="/swapi">Swapi Query</Link>
      </div>
      <div className="link">
        <Link to="/color-theme">Color Theme Generator</Link>
      </div>
      <div className="link">
        <Link to="/date">Date Formatter</Link>
      </div>
      <div className="link">
        <div className="button" style={{ backgroundColor: "#CCFFFF" }}>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
