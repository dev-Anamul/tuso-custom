import AdvanceIndex from "./pages/AdvanceIndex";
import Home from "./pages/Home";
import IncidentForm from "./pages/IncidentForm";
import SingleTicket from "./pages/SingleTicket";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advance" element={<AdvanceIndex />} />
        <Route path="/incident" element={<IncidentForm />} />
        <Route path="/ticket" element={<SingleTicket />} />
      </Routes>
    </div>
  );
}

export default App;
