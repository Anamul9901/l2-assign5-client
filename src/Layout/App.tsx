import { Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
