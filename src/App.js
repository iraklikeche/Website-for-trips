import "./styles.css";

import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Service from "./components/routes/Service";
import Contact from "./components/routes/Contact";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
