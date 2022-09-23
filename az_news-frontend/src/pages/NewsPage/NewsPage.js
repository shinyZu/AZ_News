import React from "react";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";

import { withStyles } from "@mui/styles";

function NewsPage() {
  return (
    <>
      <Header />
      <NavBar />
    </>
  );
}

export default NewsPage;
// export default withStyles(styleSheet)(HomePage);
