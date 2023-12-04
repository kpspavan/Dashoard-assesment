import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Createads from "./components/CreateADS/Createads";
import FOrm1 from "./components/Form1/FOrm1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-ads" element={<Createads />} />
          <Route path="/form1" element={<FOrm1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
