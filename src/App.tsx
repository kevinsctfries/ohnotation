import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home/Home";
import Constant from "./pages/constant/Constant";
import Linear from "./pages/linear/Linear";
import Logarithmic from "./pages/logarithmic/Logarithmic";
import Quadratic from "./pages/quadratic/Quadratic";
import Linearithmic from "./pages/linearithmic/Linearithmic";
import Exponential from "./pages/Exponential/Exponential";
import Factorial from "./pages/Factorial/Factorial";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(prev => !prev);
  };

  return (
    <div>
      <Router>
        <div className="app">
          <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />
          <div className="content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/constant" element={<Constant />} />
              <Route path="/linear" element={<Linear />} />
              <Route path="/quadratic" element={<Quadratic />} />
              <Route path="/logarithmic" element={<Logarithmic />} />
              <Route path="/linearithmic" element={<Linearithmic />} />
              <Route path="/exponential" element={<Exponential />} />
              <Route path="/factorial" element={<Factorial />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
