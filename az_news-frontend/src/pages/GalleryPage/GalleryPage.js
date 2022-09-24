import { useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";

import Footer from "../../components/Home/Footer/Footer";
import styles from "./GalleryPage.module.css";

import bg1 from "../../assets/images/other/gallery1.png";
import bg2 from "../../assets/images/sports/sports1.jpeg";
import bg3 from "../../assets/images/entertainment/entertainment2.jpeg";
import bg4 from "../../assets/images/entertainment/entertainment1.jpeg";
import bg5 from "../../assets/images/tech/tech1.jpeg";
import bg6 from "../../assets/images/other/gallery2.jpeg";
import bg7 from "../../assets/images/sports/sports4.jpg";

function GalleryPage() {
  const [gallBg1, setGallBg1] = useState(bg1);
  const [gallBg2, setGallBg2] = useState(bg2);
  const [gallBg3, setGallBg3] = useState(bg3);
  const [gallBg4, setGallBg4] = useState(bg4);
  const [gallBg5, setGallBg5] = useState(bg5);
  const [gallBg6, setGallBg6] = useState(bg6);
  const [gallBg7, setGallBg7] = useState(bg7);

  return (
    <>
      <Header />
      <NavBar />

      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.body}
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container}
          justifyContent="space-between"
        >
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__1}
            justifyContent="space-between"
          >
            <Grid
              container
              item
              xl={3.5}
              lg={3.5}
              md={3.5}
              sm={3.5}
              xs={3.5}
              className={styles.container__top__left}
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
                className={styles.container__top__left__1}
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
                className={styles.container__top__left__2}
                style={{
                  backgroundImage: `url("${gallBg2}")`,
                }}
              ></Grid>
            </Grid>
            <Grid
              container
              item
              xl={4.8}
              lg={4.8}
              md={4.8}
              sm={4.8}
              xs={4.8}
              className={styles.container__top__middle}
              style={{
                backgroundImage: `url("${gallBg3}")`,
              }}
            ></Grid>
            <Grid
              container
              item
              xl={3.5}
              lg={3.5}
              md={3.5}
              sm={3.5}
              xs={3.5}
              className={styles.container__top__right}
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
                className={styles.container__top__right__1}
                style={{
                  backgroundImage: `url("${gallBg4}")`,
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
                className={styles.container__top__right__2}
                style={{
                  backgroundImage: `url("${gallBg5}")`,
                }}
              ></Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__2}
            justifyContent="space-between"
          >
            <Grid
              container
              item
              xl={6.9}
              lg={6.9}
              md={6.9}
              sm={6.9}
              xs={6.9}
              className={styles.container__2__left}
              style={{
                backgroundImage: `url("${gallBg6}")`,
              }}
            ></Grid>
            <Grid
              container
              item
              xl={5}
              lg={5}
              md={5}
              sm={5}
              xs={5}
              className={styles.container__2__right}
              style={{
                backgroundImage: `url("${gallBg7}")`,
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export default GalleryPage;
// export default withStyles(styleSheet)(HomePage);
