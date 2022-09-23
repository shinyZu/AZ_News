import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";
import TopStories from "./TopStories/TopStories";

import styles from "./HomePage.module.css";
import CategoryBar from "../../components/00_common/CategoryBar/CategoryBar";
import BreakingNews from "../../components/Home/NewsSection/NewsSection";
import Sports from "../../components/Home/NewsSection/NewsSection";
import Tech from "../../components/Home/NewsSection/NewsSection";
import TrendingNews from "./TrendingNews/TrendingNews";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <TopStories category="TopStory" />

      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.container__body}
        justifyContent="space-between"
      >
        {/* --------------------------------Content of Left Column ----------------------*/}
        <Grid
          container
          item
          xl={6.8}
          lg={6.8}
          md={6.8}
          sm={6.8}
          xs={6.8}
          className={styles.container__body_left}
        >
          {/* Section for Breaking News */}
          <Grid
            // container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__body_left__1}
            justifyContent="center"
          >
            <Grid
              // container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__category__bar}
            >
              <CategoryBar category="Breaking News" bg_color="#e74c3c" />
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__content}
            >
              <BreakingNews category="BreakingNews" />
            </Grid>
          </Grid>

          {/* Section for Sports */}
          <Grid
            // container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__body_left__2}
          >
            <Grid
              // container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__category__bar}
            >
              <CategoryBar category="Sports" bg_color="#f1c40f" />
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__content}
            >
              <Sports category="Sports" />
            </Grid>
          </Grid>

          {/* Section for Tech */}
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__body_left__3}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__category__bar}
            >
              <CategoryBar category="Technology" bg_color="#8e44ad" />
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__content}
            >
              <Tech category="Tech" />
            </Grid>
          </Grid>
        </Grid>

        {/* ----------------------Content of Right Column ---------------------------*/}
        <Grid
          container
          item
          xl={4.8}
          lg={4.8}
          md={4.8}
          sm={4.8}
          xs={4.8}
          className={styles.container__body_right}
        >
          {/* Section for Trending News */}
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__body_right__1}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__category__bar}
            >
              <CategoryBar category="Trending" bg_color="#e67e22" />
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__content}
            >
              <TrendingNews />
            </Grid>
          </Grid>

          {/* Section for Gallery */}
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__body_right__2}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__category__bar}
            >
              <CategoryBar category="Gallery" bg_color="#16a085" />
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__content}
              style={{ height: "90%" }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
