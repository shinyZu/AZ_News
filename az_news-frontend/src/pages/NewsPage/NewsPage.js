import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Home/Footer/Footer";

import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";
import CardTag from "../../components/00_common/CardTag/CardTag";

import styles from "./NewsPage.module.css";

import left__bg1 from "../../assets/images/business/business1.jpeg";
import left__bg2 from "../../assets/images/other/international1.jpeg";
import left__bg3 from "../../assets/images/sports/sports2.jpeg";
import left__bg4 from "../../assets/images/tech/tech2.png";

import right__bg1 from "../../assets/images/sports/sports1.jpeg";
import right__bg2 from "../../assets/images/business/business3.jpeg";
import right__bg3 from "../../assets/images/entertainment/entertainment1.jpeg";
import right__bg4 from "../../assets/images/other/health1.jpeg";

function NewsPage() {
  const [leftBg1, setLeftBg1] = useState(left__bg1);
  const [leftBg2, setLeftBg2] = useState(left__bg2);
  const [leftBg3, setLeftBg3] = useState(left__bg3);
  const [leftBg4, setLeftBg4] = useState(left__bg4);

  const [rightBg1, setRightBg1] = useState(right__bg1);
  const [rightBg2, setRightBg2] = useState(right__bg2);
  const [rightBg3, setRightBg3] = useState(right__bg3);
  const [rightBg4, setRightBg4] = useState(right__bg4);

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
        className={styles.container}
        justifyContent="space-between"
      >
        {/* --------------------Left Column------------------------- */}

        <Grid
          container
          item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={5.9}
          xs={5.9}
          className={styles.container__left}
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
            className={styles.container__left__1}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${leftBg1}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Business"
              headline="Headline"
              date="Jan 01"
              chip_color="#ED4C67"
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
            className={styles.container__left__2}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${leftBg2}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="International"
              headline="Headline"
              date="Jan 01"
              chip_color="#0abde3"
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
            className={styles.container__left__3}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${leftBg3}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Sports"
              headline="Headline"
              date="Jan 01"
              chip_color="#f1c40f"
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
            className={styles.container__left__4}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${leftBg4}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Tech"
              headline="Headline"
              date="Jan 01"
              chip_color="#8e44ad"
            />
          </Grid>
        </Grid>

        {/* --------------------Right Column------------------------- */}

        <Grid
          container
          item
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
            className={styles.container__right__1}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg1}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Sports"
              headline="Headline"
              date="Jan 01"
              chip_color="#f1c40f"
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
            className={styles.container__right__2}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg2}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Business"
              headline="Headline"
              date="Jan 01"
              chip_color="#ED4C67"
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
            className={styles.container__right__3}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg3}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Entertainment"
              headline="Headline"
              date="Jan 01"
              chip_color="#16a085"
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
            className={styles.container__right__4}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg4}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category="Health"
              headline="Headline"
              date="Jan 01"
              chip_color="#2980b9"
            />
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default NewsPage;
