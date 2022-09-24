import Grid from "@mui/material/Grid";
import CardTag from "../../../components/00_common/CardTag/CardTag";

import styles from "../TopStories/TopStory.module.css";

function TopStories(props) {
  return (
    <>
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
            displayStatus={true}
            category="Business"
            headline="Headline"
            date="Jan 01"
            chip_color="#ED4C67"
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
              displayStatus={true}
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
              xl={5.9}
              lg={5.9}
              md={5.9}
              sm={5.9}
              xs={5.9}
              className={styles.container__bottom_right}
            >
              <CardTag
                displayStatus={true}
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

export default TopStories;
