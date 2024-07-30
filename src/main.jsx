
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Homepage from "./components/Homepage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} />     
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
  </Router>
);
