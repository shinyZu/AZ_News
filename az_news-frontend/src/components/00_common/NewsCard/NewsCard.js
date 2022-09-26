import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardTag from "../../../components/00_common/CardTag/CardTag";

import styles from "./NewsCard.module.css";
import CategoryService from "../../../services/CategoryService";
import NewsService from "../../../services/NewsService";

/** component for the News Card with its Ctaegory, Headline & Date on bottom left corner */
function NewsCard(props) {
  const [chipColor, setChipColor] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    getCategoryName(props.category);
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
  }, []);

  const getCategoryName = async (code) => {
    let res = await CategoryService.searchById(code);
    if (res.status == 200) {
      setCategoryName(res.data.category);
    }
  };

  //   const getPublishedImage = async (path) => {
  //     let filename = path.split("file/")[1];
  //     console.log(filename);
  //     let res = await NewsService.getImage(filename);
  //     if (res.status == 200) {
  //       console.log(res);
  //         setImage(res.data.category);
  //     }
  //   };

  return (
    <>
      <Grid
        container
        xl={5.9}
        lg={5.9}
        md={5.9}
        sm={5.9}
        xs={12}
        // className={styles.container__main}
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
            date={props.date}
            chip_color={chipColor}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default NewsCard;
