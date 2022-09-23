import React from "react";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";

import { withStyles } from "@mui/styles";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
    </>
  );
}

export default HomePage;
// export default withStyles(styleSheet)(HomePage);
