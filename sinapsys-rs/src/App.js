import React from "react";
import Home from "./components/Home.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
