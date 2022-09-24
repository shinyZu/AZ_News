import React from "react";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";

import { withStyles } from "@mui/styles";
import Footer from "../../components/Home/Footer/Footer";

function GalleryPage() {
  return (
    <>
      <Header />
      <NavBar />
      <Footer />
    </>
  );
}
export default GalleryPage;
// export default withStyles(styleSheet)(HomePage);
