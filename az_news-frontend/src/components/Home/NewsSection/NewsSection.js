import { useState } from "react";
import Grid from "@mui/material/Grid";
import CardTag from "../../../components/00_common/CardTag/CardTag";

import styles from "./NewsSection.module.css";

import bg__left from "../../../assets/images/business/business2.jpeg";
import bg__right1 from "../../../assets/images/sports/sports1.jpeg";
import bg__right2 from "../../../assets/images/entertainment/entertainment2.jpeg";
import bg__right3 from "../../../assets/images/other/queen.jpg";

function NewsSection(props) {
  const [leftBg, setLeftBg] = useState(bg__left);
  const [rightBg1, setRightBg1] = useState(bg__right1);
  const [rightBg2, setRightBg2] = useState(bg__right2);
  const [rightBg3, setRightBg3] = useState(bg__right3);

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
        justifyContent="space-between"
      >
        {/* ----------- Left Column ----------------- */}
        <Grid
          container
          item
          xl={5.8}
          lg={5.8}
          md={5.8}
          sm={5.8}
          xs={5.8}
          className={styles.container_left}
          style={{
            backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${leftBg}")`,
          }}
        >
          <CardTag
            displayStatus={props.category === "BreakingNews" ? true : false}
            category="Business"
            headline="Headline"
            date="Jan 01"
            chip_color="#ED4C67"
          />
        </Grid>

        {/* ----------- Right Column ----------------- */}

        <Grid
          container
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className={styles.container_right}
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
            className={styles.container_right__1}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg1}")`,
            }}
          >
            <CardTag
              displayStatus={props.category === "BreakingNews" ? true : false}
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
            className={styles.container_right__2}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg2}")`,
            }}
          >
            <CardTag
              displayStatus={props.category === "BreakingNews" ? true : false}
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
            className={styles.container_right__3}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${rightBg3}")`,
            }}
          >
            <CardTag
              displayStatus={props.category === "BreakingNews" ? true : false}
              category="International"
              headline="Headline"
              date="Jan 01"
              chip_color="#0abde3"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NewsSection;
