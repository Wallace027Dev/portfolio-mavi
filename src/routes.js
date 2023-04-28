import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Landscapes from "./pages/Landscapes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/landscapes" element={<Landscapes />} />
    </Routes>
  );
}

export default AppRoutes;
