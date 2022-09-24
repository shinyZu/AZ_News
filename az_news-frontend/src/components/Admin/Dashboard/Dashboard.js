import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "../../00_common/Card/Card";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const [card1, setCard1] = useState("24");
  const [card2, setCard2] = useState("15");
  const [card3, setCard3] = useState("12K");
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
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "8%" }}
      >
        <Grid
          container
          xl={11}
          lg={11}
          md={12}
          sm={12}
          xs={12}
          // justifyContent="space-between"
          justifyContent="center"
          alignItems="center"
        >
          <Card cardNo={card1} cardTitle="Editors" color="#f1c40f" />
          <Card cardNo={card2} cardTitle="Categories" color="#9b59b6" />
          <Card cardNo={card3} cardTitle="Followers" color="#2ecc71" />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
