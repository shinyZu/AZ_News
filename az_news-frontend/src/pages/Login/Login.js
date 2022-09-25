import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Paper from "@mui/material/Paper";
import MySnackBar from "../../components/00_common/SnackBar/MySnackBar";
import jwt_decode from "jwt-decode";

import styles from "./Login.module.css";

import bg_img from "../../assets/images/office7.jpg";

function Login(props) {
  const { classes } = props;

  useEffect(() => {
    document.body.style.width = "65%";
  });

  const location = useLocation();
  const formType = location.pathname.split("/")[1];

  const navigate = useNavigate();
  let username = "shinyZu";
  let password = "shiny123";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [openAlert, setOpenAlert] = useState({
    open: "",
    alert: "",
    severity: "",
    variant: "",
  });

  const [currentBtn, setCurrentBtn] = useState("");

  const loginUser = () => {
    console.log(formData);

    if (formData.username === username && formData.password === password) {
      localStorage.setItem(
        "userName",
        JSON.stringify(formData.username)
        //   JSON.stringify(jwt_decode(usernameFromToken).user)
      );
      console.log(localStorage.length);

      if (localStorage.length == 0) {
        navigate("*");
      } else {
        navigate("/dashboard");
      }
    } else {
      setOpenAlert({
        open: true,
        alert: "Invalid Credentials!!!",
        severity: "error",
        variant: "standard",
      });
    }
  };

  const registerUser = () => {
    console.log(formData);
    setOpenAlert({
      open: true,
      alert: "User Signed In Successfully!",
      severity: "success",
      variant: "standard",
    });
    navigate("/dashboard");
  };

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
              opacity: "0.9",
            }}
          >
            <NavLink
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                margin: "5px 5px",
              }}
            >
              <Typography variant="h5" className={styles.closeBtn}>
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
                mt={2}
                className={styles.container__logo}
                justifyContent="center"
                alignItems="center"
              >
                <PersonIcon style={{ fontSize: "150px", color: "#35597c" }} />
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
                <ValidatorForm
                  onSubmit={() => {
                    currentBtn === "Login" ? loginUser() : registerUser();
                  }}
                >
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
                      className={styles.input}
                    >
                      <TextValidator
                        label="Username"
                        type="text"
                        variant="outlined"
                        size="small"
                        // fullWidth
                        required={true}
                        validators={["matchRegexp:^[A-z0-9-]{5,}$"]}
                        errorMessages={[
                          "Minimum 8 characters with only letters and numbers",
                        ]}
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
                        validators={["matchRegexp:^[A-z0-9]{8,}$"]}
                        errorMessages={["Must have atleast 8 characters"]}
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
                          validators={[
                            "matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$",
                          ]}
                          errorMessages={["Invalid Email Address"]}
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
                      <button
                        className={styles.btn_login_signIn}
                        onClick={(e) => {
                          console.log(e);
                          setCurrentBtn(e.target.innerText);
                        }}
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        className={styles.btn_login_signIn}
                        onClick={(e) => {
                          console.log(e);
                          setCurrentBtn(e.target.innerText);
                        }}
                      >
                        Sign In
                      </button>
                    )}
                  </Grid>
                </ValidatorForm>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <MySnackBar
        open={openAlert.open}
        alert={openAlert.alert}
        severity={openAlert.severity}
        variant={openAlert.variant}
        onClose={() => {
          setOpenAlert({ open: false });
        }}
      />
    </>
  );
}

export default Login;
