import "./App.css";
// import AppBar from "./components/Admin/SideNavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
