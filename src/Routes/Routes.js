import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export default function RouteMap() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/Register"
            element={
              <Register
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
