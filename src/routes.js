import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Arts from "./pages/Arts";
import Projects from "./pages/Projects";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/arts" element={<Arts />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default AppRoutes;
