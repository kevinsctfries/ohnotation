import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Constant from "./pages/constant/Constant";
import Linear from "./pages/linear/Linear";
import Logarithmic from "./pages/logarithmic/Logarithmic";
import Quadratic from "./pages/quadratic/Quadratic";
import Linearithmic from "./pages/linearithmic/Linearithmic";
import Exponential from "./pages/Exponential/Exponential";
import Factorial from "./pages/Factorial/Factorial";
import NavButtons from "./components/NavButtons";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <h1 className="title">
              Oh, No<span className="subTitle">tation</span>
            </h1>
            <NavButtons />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/constant" element={<Constant />} />
              <Route path="/linear" element={<Linear />} />
              <Route path="/logarithmic" element={<Logarithmic />} />
              <Route path="/quadratic" element={<Quadratic />} />
              <Route path="/linearithmic" element={<Linearithmic />} />
              <Route path="/exponential" element={<Exponential />} />
              <Route path="/factorial" element={<Factorial />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
