import { useState } from "react";
import { Camera } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { delay } from "motion";
import SideBar from "./components/SideBar";
import Visitors from "./components/Visitors";
import Notifications from "./components/Notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Visits from "./components/Visits";
import VisitorDetails from "./components/Cards/VisitorDetails";
import Home from "./components/Home";
import VisitDetails from "./components/Cards/VisitDetails";

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
      </Routes>
    </Router>
  );
}

export default App;
