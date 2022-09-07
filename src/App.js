import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./routes/ContactPage";

import Home from "./routes/Home";
import PricingPage from "./routes/PricingPage";
import TraingPage from "./routes/TraingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/training" element={<TraingPage/>} />
        <Route path="/contact" element={<ContactPage/>} />

      </Routes>
    </div>
  );
}

export default App;
