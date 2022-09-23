import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Link, NavLink } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import styles from "./NavBar.module.css";

function NavBar() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }} style={{ border: "2px solid black" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
          // onChange={() => {
          //   console.log(value);
          // }}
        >
          <NavLink to="/dashboard">
            <Tab value={0} label="Dashboard" />
          </NavLink>
          <NavLink to="/news">
            <Tab label="News" />
          </NavLink>

          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    </>
  );
}

export default NavBar;
