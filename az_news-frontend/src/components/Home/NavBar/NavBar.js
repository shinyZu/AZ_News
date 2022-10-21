import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Link, NavLink } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import styles from "./NavBar.module.css";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";

function NavBar(props) {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };

  const navLinkStyle = ({ isActive }) => {
    // isActive will be set to true if the link is the current route
    return {
      color: isActive ? "red" : "normal",
    };
  };

  return (
    <>
      <Box>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            console.log(event);
            console.log(newValue);
            setValue(newValue);
          }}
          className={styles.nav__tabs}
          indicatorColor="#fff !important"
        >
          <NavLink to="/home" className={styles.nav__text} style={navLinkStyle}>
            <Tab value="1" className={styles.nav__text} label="Home" />
          </NavLink>

          <NavLink to="/news" className={styles.nav__text} style={navLinkStyle}>
            <Tab value="2" className={styles.nav__text} label="News" />
          </NavLink>

          <NavLink
            to="/sports"
            className={styles.nav__text}
            style={navLinkStyle}
          >
            <Tab value="2" className={styles.nav__text} label="Sports" />
          </NavLink>

          <NavLink to="/tech" className={styles.nav__text} style={navLinkStyle}>
            <Tab value="2" className={styles.nav__text} label="Tech" />
          </NavLink>

          <NavLink
            to="/gallery"
            className={styles.nav__text}
            style={navLinkStyle}
          >
            <Tab value="3" className={styles.nav__text} label="Gallery" />
          </NavLink>

          <NavLink
            to="/"
            className={styles.nav__text} /* style={navLinkStyle} */
          >
            <Tab value="4" className={styles.nav__text} label="About Us" />
          </NavLink>

          <NavLink
            to="/"
            className={styles.nav__text} /* style={navLinkStyle} */
          >
            <Tab value="5" className={styles.nav__text} label="Contact Us" />
          </NavLink>
        </Tabs>
      </Box>
    </>
  );
}

// export default NavBar;
export default withStyles(styleSheet)(NavBar);

// <Box>
// <Tabs
//   value={value}
//   onChange={handleChange}
//   className={classes.nav__tabs}
//   indicatorColor="#fff !important"
// >
//     <NavLink to="/" className={classes.nav__text} style={navLinkStyle}>
//       <Tab value={0} className={classes.nav__text} label="Home" />
//     </NavLink>

//     {/* <Link to="/" className={classes.nav__text}>
//     <Tab className={classes.nav__text} label="Home" />
//   </Link> */}

//     <NavLink
//       smooth
//       to="/news"
//       className={classes.nav__text}
//       style={navLinkStyle}
//     >
//       <Tab value={0} className={classes.nav__text} label="News" />
//     </NavLink>

//     <NavLink
//       smooth
//       to="/gallery"
//       className={classes.nav__text}
//       style={navLinkStyle}
//     >
//       <Tab value={1} className={classes.nav__text} label="Gallery" />
//     </NavLink>
//   </Tabs>
// </Box>;
