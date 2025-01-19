import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Constant from "./pages/constant/Constant";
import Linear from "./pages/linear/Linear";
import Logarithmic from "./pages/logarithmic/Logarithmic";
import Quadratic from "./pages/quadratic/Quadratic";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <h1>
              Oh, No<span className="title">tation</span>
            </h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/constant" element={<Constant />} />
              <Route path="/linear" element={<Linear />} />
              <Route path="/logarithmic" element={<Logarithmic />} />
              <Route path="/quadratic" element={<Quadratic />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
