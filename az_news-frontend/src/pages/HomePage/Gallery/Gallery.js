import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./Gallery.module.css";

function Gallery() {
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
        ></Grid>
      </Grid>
    </>
  );
}

export default Gallery;
