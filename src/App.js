import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyRoutine from "./Pages/MyRoutine/MyRoutine";
import MyActivities from "./Pages/MyActivities/MyActivities";
import Signup from "./Pages/Signup/Signup";
//import Success from "./pages/Success/Success";

function App() {
  const [user, setUser] = useState(null);
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const decodedJwt = token !== null ? parseJwt(token) : Date.now();
    if (decodedJwt.exp * 1000 > Date.now()) {
      setUser(true);
    } else {
      setUser(false);
      window.localStorage.removeItem("token");
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("user", user);
  }, [user]);

  return (
    <Routes>
      {!user && (
        <Route
          path="/login"
          element={<Login authenticate={() => setUser(true)} />}
        />
      )}

      {!user && (
        <Route
          path="/signup"
          element={<Signup authenticate={() => setUser(true)} />}
        />
      )}

      {user && (
        <React.Fragment>
          <Route
            index
            element={
              <Home
                logout={() => {
                  setUser(false);
                  window.localStorage.removeItem("token");
                }}
              />
            }
          />
          <Route
            path="/my-routine"
            element={<MyRoutine logout={() => setUser(false)} />}
          />
          <Route
            path="/my-activities"
            element={<MyActivities logout={() => setUser(false)} />}
          />
          {/*
          <Route path="/success" element={<Success />} /> */}
        </React.Fragment>
      )}

      <Route
        path="*"
        element={<Navigate to={!user ? "/login" : `/`} replace />}
      />
    </Routes>
  );
}

export default App;
