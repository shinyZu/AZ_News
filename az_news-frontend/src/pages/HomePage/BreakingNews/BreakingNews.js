import Grid from "@mui/material/Grid";
import CardTag from "../../../components/00_common/CardTag/CardTag";

import styles from "./BreakingNews.module.css";

function BreakingNews() {
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
        >
          <CardTag
            category="Business"
            headline="Headline"
            date="Jan 01"
            chip_color="#2980b9"
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
          >
            <CardTag
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
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container_right__3}
          >
            <CardTag
              category="International"
              headline="Headline"
              date="Jan 01"
              chip_color="#ff7675"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default BreakingNews;
