import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
				<Nav />
        <AppRoutes />
				<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
