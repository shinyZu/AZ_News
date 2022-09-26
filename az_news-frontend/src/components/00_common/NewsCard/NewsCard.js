import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardTag from "../../../components/00_common/CardTag/CardTag";
import CategoryService from "../../../services/CategoryService";

import styles from "./NewsCard.module.css";

/** component for the News Card with its Category, Headline & Date on bottom left corner */
function NewsCard(props) {
  const [chipColor, setChipColor] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [monthDate, setMonthDate] = useState("");

  const path = useLocation().pathname.split("/")[1];
  //   console.log(pathname.split("/")[1]); //sports/ news ....

  useEffect(() => {
    getCategoryName(props.category);
    formatDate(props.date);
    // getPublishedImage(props.image);

    switch (categoryName) {
      case "Business":
        setChipColor("#ED4C67");
        break;

      case "International":
        setChipColor("#0abde3");
        break;

      case "Sports":
        setChipColor("#f1c40f");
        break;

      case "Tech":
        setChipColor("#8e44ad");
        break;

      case "Entertainment":
        setChipColor("#16a085");
        break;

      case "Health":
        setChipColor("#2980b9");
        break;

      default:
        break;
    }
  }, [categoryName, monthDate]);

  const getCategoryName = async (code) => {
    let res = await CategoryService.searchById(code);
    if (res.status == 200) {
      setCategoryName(res.data.category);
    }
  };

  const formatDate = (date) => {
    let d = new Date(date);
    let month = d.toLocaleString("default", { month: "short" });
    let year = d.getFullYear();
    setMonthDate(month + " " + year);
  };

  return (
    <>
      {path === "news" && (
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__main}
        >
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__card}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${props.image}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category={categoryName}
              headline={props.headline}
              date={monthDate}
              chip_color={chipColor}
            />
          </Grid>
        </Grid>
      )}

      {path === "sports" && categoryName === "Sports" && (
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__main}
        >
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__card}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${props.image}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category={categoryName}
              headline={props.headline}
              date={monthDate}
              chip_color={chipColor}
            />
          </Grid>
        </Grid>
      )}

      {path === "tech" && categoryName === "Tech" && (
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__main}
        >
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={styles.container__card}
            style={{
              backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)), url("${props.image}")`,
            }}
          >
            <CardTag
              displayStatus={true}
              category={categoryName}
              headline={props.headline}
              date={monthDate}
              chip_color={chipColor}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default NewsCard;
