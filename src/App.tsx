
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "src/pages/Index";
import PartDetails from "src/pages/PartDetails";
import NotFound from "src/pages/NotFound";
import "src/App.css";

function App() {
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
