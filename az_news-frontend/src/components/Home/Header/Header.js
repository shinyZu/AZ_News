import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./Header.module.css";
import logo from "../../../assets/images/logo4.jpg";
import Login from "../../../pages/Login/Login";

function Header() {
  return (
    <>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        // style={{ border: "2px solid blue" }}
        className={styles.container__1}
      >
        <Grid
          container
          item
          xl={2}
          lg={2}
          md={2}
          sm={3}
          xs={3}
          // style={{ border: "2px solid green" }}
          className={styles.logo__container}
        >
          <img src={logo} className={styles.logo__img} />
        </Grid>
        <Grid
          container
          item
          xl={10}
          lg={10}
          md={10}
          sm={9}
          xs={9}
          // style={{ border: "2px solid red" }}
          className={styles.container__2}
        >
          <Grid
            container
            item
            xl={2.5}
            lg={2.5}
            md={3.5}
            sm={5.5}
            xs={7}
            // style={{ border: "2px solid blue" }}
            className={styles.container__3}
            direction="column"
            justifyContent="center"
          >
            <Typography variant="h4" className={styles.header_title}>
              AZ News
            </Typography>
            <Typography
              variant="h7"
              className={styles.header_subtitle}
              style={{ marginTop: 0 }}
            >
              aznews.lk
            </Typography>
          </Grid>
          <Grid
            container
            item
            xl={10}
            lg={9.5}
            md={8.5}
            sm={6.5}
            xs={5}
            // style={{ border: "2px solid green" }}
            // className={styles.container__4}
          >
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              // style={{ border: "2px solid blue" }}
              justifyContent="end"
              alignItems="center"
            >
              <Grid
                container
                item
                xl={1.5}
                lg={1.5}
                md={1.5}
                sm={2}
                xs={2}
                mr={2}
                // style={{ border: "2px solid blue" }}
                justifyContent="flex-end"
                // alignItems="end"
              >
                <NavLink to="/login" className={styles.nav__text}>
                  <Button className={styles.btn__login}>Login</Button>
                </NavLink>
              </Grid>

              {/* <Grid
                container
                item
                xl={2}
                lg={2}
                md={2}
                sm={3}
                xs={3}
                justifyContent="end"
                alignItems="center"
              >
                <NavLink to="/register" className={styles.nav__text}>
                  <Button className={styles.btn__signIn}>Sign In</Button>
                </NavLink>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
