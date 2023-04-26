import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
				<Nav />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
