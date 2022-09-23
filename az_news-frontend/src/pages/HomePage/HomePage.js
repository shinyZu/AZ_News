import Grid from "@mui/material/Grid";

import React from "react";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";

import b_img from "../../assets/images/business/business1.jpeg";

import styles from "./TopStory.module.css";
import CardTag from "../../components/00_common/CardTag/CardTag";

function HomePage() {
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
        className={styles.container__1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          container
          item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={5.9}
          xs={5.9}
          className={styles.container__left}
        >
          {/* <img id={1} className={styles.card__img} /> */}
          <CardTag
            category="Business"
            headline="Headline"
            date="Jan 01"
            chip_color="#2980b9"
          />
        </Grid>
        <Grid
          container
          // item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={5.9}
          xs={5.9}
          className={styles.container__right}
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
            className={styles.container__top}
          >
            <CardTag
              category="Tech"
              headline="Headline"
              date="Jan 01"
              chip_color="#8e44ad"
            />
          </Grid>
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__bottom}
            justifyContent="space-between"
          >
            <Grid
              container
              item
              xl={5.9}
              lg={5.9}
              md={5.9}
              sm={5.9}
              xs={5.9}
              className={styles.container__bottom_left}
            >
              <CardTag
                category="Entertainment"
                headline="Headline"
                date="Jan 01"
                chip_color="#16a085"
              />
            </Grid>
            <Grid
              container
              item
              xl={5.9}
              lg={5.9}
              md={5.9}
              sm={5.9}
              xs={5.9}
              className={styles.container__bottom_right}
            >
              <CardTag
                category="Sports"
                headline="Headline"
                date="Jan 01"
                chip_color="#f1c40f"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
// export default withStyles(styleSheet)(HomePage);
