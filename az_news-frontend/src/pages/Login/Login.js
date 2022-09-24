import { useState } from "react";
import { Navigate, useLocation, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Paper from "@mui/material/Paper";

import styles from "./Login.module.css";

import bg_img from "../../assets/images/studio1.jpeg";

function Login(props) {
  const { classes } = props;

  const location = useLocation();
  const formType = location.pathname.split("/")[1];

  //   const [loginFormData, setLoginFormData] = useState({
  //     username: "",
  //     password: "",
  //   });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
        }}
        elevation={12}
        style={{
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container}
        >
          <Grid
            container
            item
            xl={6.5}
            lg={6.5}
            md={6.5}
            sm={12}
            xs={12}
            className={styles.container__left}
            style={{
              backgroundImage: `url("${bg_img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.7",
            }}
          >
            <NavLink
              to="/home"
              style={{
                textDecoration: "none",
                color: "black",
                margin: "5px 5px",
              }}
            >
              <Typography variant="h6" className={styles.closeBtn}>
                X
              </Typography>
            </NavLink>
          </Grid>
          <Grid
            container
            item
            xl={5.5}
            lg={5.5}
            md={5.5}
            sm={12}
            xs={12}
            className={styles.container__right}
          >
            {/* <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              mr={2}
              className={styles.container__closeBtn}
              justifyContent="end"
            >
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <Typography variant="h6" className={styles.closeBtn}>
                  X
                </Typography>
              </NavLink>
            </Grid> */}

            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={styles.container__2}
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
                className={styles.container__logo}
                justifyContent="center"
                alignItems="center"
              >
                <PersonIcon style={{ fontSize: "100px", color: "#c48863" }} />
              </Grid>

              <Grid
                container
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={styles.container__form}
                justifyContent="center"
              >
                <ValidatorForm>
                  <Grid
                    container
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    rowGap={2}
                    className={styles.subcontainer__form}
                    justifyContent="center"
                  >
                    <Grid
                      container
                      item
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      justifyContent="center"
                      className={styles.txt_username}
                    >
                      <TextValidator
                        label="Username"
                        type="text"
                        variant="outlined"
                        size="small"
                        // fullWidth
                        required={true}
                        validators={["matchRegexp:^[A-z0-9-]*$"]}
                        value={formData.username}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            username: e.target.value,
                          });
                        }}
                        style={{ width: "250px" }}
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
                      justifyContent="center"
                      className={styles.txt_username}
                    >
                      <TextValidator
                        label="Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        //   fullWidth
                        required={true}
                        value={formData.password}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          });
                        }}
                        style={{ width: "250px" }}
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
                      justifyContent="center"
                    >
                      {formType === "register" && (
                        <TextValidator
                          label="Email"
                          type="email"
                          variant="outlined"
                          size="small"
                          //   fullWidth
                          required={true}
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            });
                          }}
                          style={{ width: "250px" }}
                        />
                      )}
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    justifyContent="center"
                  >
                    {formType === "login" ? (
                      <button className={styles.btn_login_signIn}>Login</button>
                    ) : (
                      <button className={styles.btn_login_signIn}>
                        Sign In
                      </button>
                    )}
                  </Grid>
                  <Grid
                    container
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    justifyContent="center"
                  >
                    {formType === "login" ? (
                      <>
                        <small style={{ margin: "8px 5px" }}>
                          Not a Member?
                        </small>
                        <NavLink
                          to="/register"
                          style={{ margin: "5px 5px", textDecoration: "none" }}
                        >
                          Sign In
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <small style={{ margin: "8px 5px" }}>
                          Already a Member?
                        </small>
                        <NavLink
                          to="/login"
                          style={{ margin: "5px 5px", textDecoration: "none" }}
                        >
                          Login
                        </NavLink>
                      </>
                    )}
                  </Grid>
                </ValidatorForm>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Login;
