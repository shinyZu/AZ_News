import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Card(props) {
  return (
    <>
      <Grid
        container
        xl={3.8}
        lg={3.8}
        md={10}
        sm={10}
        xs={10}
        style={{ padding: "10px" }}
      >
        <Paper
          sx={{
            p: "60px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
          }}
          elevation={12}
          style={{
            borderRadius: "20px",
            // border: "2px solid blue",
          }}
        >
          <Typography variant="h1" color={props.color} fontSize={200}>
            {props.cardNo}
          </Typography>
          <Typography variant="h4" color={props.color}>
            {props.cardTitle}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Card;
