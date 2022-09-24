import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./Gallery.module.css";

import bg1 from "../../../assets/images/other/gallery1.png";
import bg2 from "../../../assets/images/other/gallery2.jpeg";
import bg3 from "../../../assets/images/entertainment/entertainment1.jpeg";
import bg4 from "../../../assets/images/sports/sports4.jpg";

function Gallery() {
  const [gallBg1, setGallBg1] = useState(bg1);
  const [gallBg2, setGallBg2] = useState(bg2);
  const [gallBg3, setGallBg3] = useState(bg3);
  const [gallBg4, setGallBg4] = useState(bg4);

  return (
    <>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.container}
        alignContent="space-between"
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.subcontainer__1}
          style={{
            backgroundImage: `url("${gallBg1}")`,
          }}
        ></Grid>
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.subcontainer__2}
          style={{
            backgroundImage: `url("${gallBg2}")`,
          }}
        ></Grid>
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.subcontainer__3}
          style={{
            backgroundImage: `url("${gallBg3}")`,
          }}
        ></Grid>
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.subcontainer__4}
          style={{
            backgroundImage: `url("${gallBg4}")`,
          }}
        ></Grid>
      </Grid>
    </>
  );
}

export default Gallery;
