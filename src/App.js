import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Course from "./routes/Course";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Enroll from "./routes/Enroll";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </>
  );
}

export default App;
