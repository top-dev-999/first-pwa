import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//import Pages
import MainPage from "./pages/MainPage";
import SecurePage from "./pages/SecurePage";
import ComfortPage from "./pages/ComfortPage";

import BottomNavigationBar from "./components/BottomNavigationBar";

const SERVER_API =
  "http://ec2-18-116-71-145.us-east-2.compute.amazonaws.com:8001";

function App() {
  const [temperature, setTemperature] = React.useState(10);
  const [security, setSecurity] = React.useState({
    alarm: false,
    door: true,
    garage: true,
  });
  const [comfort, setComfort] = React.useState("off");

  useEffect(() => {
    fetch(SERVER_API + "/status")
      .then((resp) => console.log(resp.json()))
      .then((data) => console.log(data));
  });
  const onUpdateSecurity = (value, type) => {
    setSecurity({ ...security, [type]: value });
    console.log(security);
  };

  const onUpdateTemperature = (value) => {
    setTemperature(value);
  };

  const onUpdateComfort = (value) => {
    setComfort(value);
  };
  // render() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              temperature={temperature}
              alarm={security.alarm}
              door={security.door}
              garage={security.garage}
              comfort={comfort}
            />
          }
        />
        <Route
          exact
          path="/secure"
          element={
            <SecurePage
              alarm={security.alarm}
              door={security.door}
              garage={security.garage}
              onUpdte={(value, type) => onUpdateSecurity(value, type)}
            />
          }
        />
        <Route
          exact
          path="/comfort"
          element={
            <ComfortPage
              comfort={comfort}
              temperature={temperature}
              onUpdateTemperature={(value) => onUpdateTemperature(value)}
              onUpdateComfort={(value) => onUpdateComfort(value)}
            />
          }
        />
      </Routes>
      <BottomNavigationBar />
    </Router>
  );
  // }
}

export default App;
