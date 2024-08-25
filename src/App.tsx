import { Outlet } from "react-router-dom";
import Navber from "./components/Navber/Navber";

function App() {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
}

export default App;
