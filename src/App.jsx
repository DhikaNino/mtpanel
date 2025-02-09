import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Sidebar from "./components/Sidebar";
import DatabaseManagement from "./pages/DatabaseManagement";
import DomainManagement from "./pages/DomainManagement";
import Logs from "./pages/Logs";
import TerminalPage from "./pages/TerminalPage";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar><Home/></Sidebar>} />
        <Route path="/databases" element={<Sidebar><DatabaseManagement/></Sidebar>} />
        <Route path="/domains" element={<Sidebar><DomainManagement/></Sidebar>} />
        <Route path="/logs" element={<Sidebar><Logs/></Sidebar>} />
        <Route path="/terminal" element={<Sidebar><TerminalPage/></Sidebar>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
