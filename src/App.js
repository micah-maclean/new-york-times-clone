import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import World from "./pages/World/World";
import Science from "./pages/Science/Science";
import Tech from "./pages/Tech/Tech";
import Health from "./pages/Health/Health";
import Politics from "./pages/Politics/Politics";
import Article from "./pages/Article/Article";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/science" element={<Science />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/health" element={<Health />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
