import "./App.css";
// import AppBar from "./components/Admin/SideNavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Login from "./pages/Login/Login";
import AdminDashbaord from "./pages/Admin/Dashboard";
import NotFound from "./pages/Session/NotFound";
import RequireAuth from "./pages/Session/RequireAuth";
import Sports from "./pages/SportsNews/SportsNews";
import TechNews from "./pages/TechNews/TechNews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tech" element={<TechNews />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <AdminDashbaord />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
