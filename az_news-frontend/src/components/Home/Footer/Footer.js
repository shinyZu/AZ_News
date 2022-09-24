import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import styles from "./Footer.module.css";

function Footer() {
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
        <Grid
          // container
          item
          xl={8}
          lg={8}
          md={8}
          sm={8}
          xs={8}
          className={styles.container__left}
          direction="column"
          justifyContent="center"
        >
          <Typography variant="h4" className={styles.footer_title}>
            AZ News
          </Typography>

          <Typography variant="h7" paragraph className={styles.footer_para}>
            Consequat mauris nunc congue nisi vitae suscipit.Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus.
          </Typography>
        </Grid>
        {/* <Grid
          container
          item
          xl={3.9}
          lg={3.9}
          md={3.9}
          sm={3.9}
          xs={3.9}
          className={styles.container__middle}
        ></Grid> */}
        <Grid
          container
          item
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
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
            className={styles.container__icons}
            justifyContent="space-around"
            alignItems="center"
          >
            <FacebookIcon fontSize="large" className={styles.icon} />
            <TwitterIcon fontSize="large" className={styles.icon} />
            <InstagramIcon fontSize="large" className={styles.icon} />
            <YouTubeIcon fontSize="large" className={styles.icon} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__copyright}
          justifyContent="center"
        >
          <small style={{ color: "#ccc" }}>
            Copyright© 2022 Shiny Isurandi | All rights reserved.
          </small>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
