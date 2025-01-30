import SideBar from "./components/SideBar";
import Visitors from "./components/Visitors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Visits from "./components/Visits";
import VisitorDetails from "./components/Cards/VisitorDetails";
import Home from "./components/Home";
import VisitDetails from "./components/Cards/VisitDetails";
import CheckInVisitor from "./components/CheckInVisitor";

function App() {
  return (
    <Router>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visitor" element={<Visitors />} />
        <Route path="/visits" element={<Visits />} />

        <Route path="/visitor/:visitorId" element={<VisitorDetails />} />
        <Route path="/visits/:visitId" element={<VisitDetails />} />
        <Route path="/checkIn/:visitorId" element={<CheckInVisitor />} />
      </Routes>
    </Router>
  );
}

export default App;
