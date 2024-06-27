import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RssFeed from "./components/RssFeed.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rss" element={<RssFeed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
