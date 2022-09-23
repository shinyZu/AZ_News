import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./CategoryBar.module.css";

function CategoryBar(props) {
  return (
    <>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.container__bar}
        style={{ border: `2px solid ${props.bg_color}` }}
      >
        <Grid
          container
          xl={0.2}
          lg={0.2}
          md={0.2}
          sm={0.2}
          xs={0.2}
          className={styles.vertical_stripe}
          style={{
            backgroundColor: `${props.bg_color}`,
          }}
        ></Grid>

        <Grid
          container
          xl={11.8}
          lg={11.8}
          md={11.8}
          sm={11.8}
          xs={11.8}
          className={styles.container__content}
          justifyContent="space-between"
        >
          <Grid
            container
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className={styles.container__category}
          >
            <Typography variant="h5" className={styles.category__text}>
              {props.category}
            </Typography>
          </Grid>
          <Grid
            container
            xl={3}
            lg={3}
            md={3}
            sm={3}
            xs={3}
            className={styles.container__viewall}
          >
            <Typography variant="h7" className={styles.viewall__text}>
              View All
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CategoryBar;
