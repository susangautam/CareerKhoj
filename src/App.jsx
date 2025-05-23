// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
    
          <Route path="/" element={<Home/>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
