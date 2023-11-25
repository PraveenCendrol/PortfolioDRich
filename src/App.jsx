import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./screens/NavBar/NavBar";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
