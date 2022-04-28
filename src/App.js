import "./styles/App.scss";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./home";
import Sidebar from "./sideBar";
import Swapi from "./swapi";
import DateFormatter from "./dateFormatter";
import WeatherWidget from "./weather";
import ThemeGenerator from "./themeGenerator";
import ColorSlider from "./colorSlider";
import Login from "./login";

function App() {
  const [authToken, setAuthToken] = useState(false);

  if (authToken) {
    return (
      <Router>
        <div className="App">
          <div className="sidebar">
            <Sidebar setAuthToken={setAuthToken} />
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/swapi" element={<Swapi />} />
              <Route exact path="/color-slider" element={<ColorSlider />} />
              <Route exact path="/color-theme" element={<ThemeGenerator />} />
              <Route path="/weather" element={<WeatherWidget />} />
              <Route path="/date" element={<DateFormatter />} />
              <Route path="/login" element={<Navigate exact to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route
                path="/login"
                element={<Login setAuthToken={setAuthToken} />}
              />
              {authToken ? (
                <Route path="/login" element={<Navigate exact to="/" />} />
              ) : null}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
