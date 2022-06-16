import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useState, useEffect } from "react";

function App() {

  const [device, setDevice] = useState(window.visualViewport.width > window.visualViewport.height);

  useEffect(() => {
    const resize = () =>
      setDevice(window.visualViewport.width > window.visualViewport.height);
    window.addEventListener("resize", resize);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login device={device} />} />
        <Route path="/Register" element={<Register device={device} />} />
        <Route path="/" element={<Home device={device} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
