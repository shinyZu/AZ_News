import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrendingRow from "../../../components/00_common/TrendingRow/TrendingRow";

import styles from "./TrendingNews.module.css";

function TrendingNews() {
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
      >
        <TrendingRow rowNo="1" />
        <TrendingRow rowNo="2" />
        <TrendingRow rowNo="3" />
        <TrendingRow rowNo="4" />
        <TrendingRow rowNo="5" />
        <TrendingRow rowNo="6" />
      </Grid>
    </>
  );
}

export default TrendingNews;
