import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import PartDetails from "./pages/PartDetails";
import NotFound from "./pages/NotFound";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/part/:partNumber" element={<PartDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
