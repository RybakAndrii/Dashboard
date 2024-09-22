import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
