import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Blocks from "./src/blocks";
import Console from "./src/console";

import "./css/background.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="paper-background">
        <Navbar />
        <div
          className="mainBody"
          style={{ marginTop: "55px", height: "calc(100vh - 55px)" }}
        >
          <Routes>
            <Route index={true} path="/blocks" element={<Blocks />} />
            <Route path="/console" element={<Console />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
