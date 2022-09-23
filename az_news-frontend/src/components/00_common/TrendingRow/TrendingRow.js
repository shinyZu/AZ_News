import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./TrendingRow.module.css";

function TrendingRow(props) {
  return (
    <>
      <Grid
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.container_row}
      >
        <Grid
          container
          item
          xl={1.5}
          lg={1.5}
          md={1.5}
          sm={1.5}
          xs={1.5}
          className={styles.container_number}
          justifyContent="center"
          alignContent="center"
        >
          <Typography variant="h5" className={styles.number__style}>
            {props.rowNo}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xl={10.5}
          lg={10.5}
          md={10.5}
          sm={10.5}
          xs={10.5}
          className={styles.container_headline}
          alignContent="center"
        >
          <Typography variant="h6" className={styles.headline__text}>
            Consequat mauris nunc congue
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default TrendingRow;
