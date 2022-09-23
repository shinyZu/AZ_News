import "./App.css";
// import AppBar from "./components/Admin/SideNavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
