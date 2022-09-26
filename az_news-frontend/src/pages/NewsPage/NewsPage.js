import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Home/Footer/Footer";

import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";
import NewsCard from "../../components/00_common/NewsCard/NewsCard";
import CardTag from "../../components/00_common/CardTag/CardTag";

import styles from "./NewsPage.module.css";

import img1 from "../../assets/images/business/business1.jpeg";
import img2 from "../../assets/images/sports/sports2.jpeg";
import img3 from "../../assets/images/other/health1.jpeg";
import img4 from "../../assets/images/other/queen.jpg";
import img5 from "../../assets/images/tech/tech2.png";
import img6 from "../../assets/images/sports/sports1.jpeg";
import img7 from "../../assets/images/entertainment/entertainment2.jpeg";
import img8 from "../../assets/images/entertainment/entertainment1.jpeg";

import NewsService from "../../services/NewsService";

function NewsPage() {
  // const [leftBg1, setLeftBg1] = useState(left__bg1);
  // const [leftBg2, setLeftBg2] = useState(left__bg2);
  // const [leftBg3, setLeftBg3] = useState(left__bg3);
  // const [leftBg4, setLeftBg4] = useState(left__bg4);

  // const [rightBg1, setRightBg1] = useState(right__bg1);
  // const [rightBg2, setRightBg2] = useState(right__bg2);
  // const [rightBg3, setRightBg3] = useState(right__bg3);
  // const [rightBg4, setRightBg4] = useState(right__bg4);

  const [monthDate, setMonthDate] = useState("");

  const [newsList, setNewsList] = useState([]);

  const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = async () => {
    let res = await NewsService.getAll();

    if (res.status == 200) {
      setNewsList(res.data);
      // console.log(newsList);
    }
  };

  // // const formatDate = (date) => {
  // //   return new Date(date).toISOString().split("T")[0]; // yyyy-MM-dd
  // // }

  // const getFormatedDate = (date) => {
  //   let d = new Date(date);
  //   let month = d.toLocaleString("default", { month: "short" });
  //   // console.log(month); // prints name of the month

  //   let year = d.getFullYear();
  //   // console.log(day);

  //   setMonthDate(year);
  //   // console.log(monthDate);
  // };

  return (
    <>
      <Header />
      <NavBar />

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
        {newsList.map((news, index) => {
          return (
            <NewsCard
              key={news._id}
              category={news.category}
              headline={news.headline}
              date="Jan 01"
              image={imageArray[index]}
            />
          );
        })}

        {/* <NewsCard
          category="Business"
          headline="Headline 1"
          date="Jan 01"
          image={leftBg1}
        />
        <NewsCard
          category="International"
          headline="Headline 2"
          date="Jan 01"
          image={leftBg2}
        />
        <NewsCard
          category="Sports"
          headline="Headline 3"
          date="Jan 01"
          image={leftBg3}
        />
        <NewsCard
          category="Tech"
          headline="Headline 4"
          date="Jan 01"
          image={leftBg4}
        />

        <NewsCard
          category="International"
          headline="Headline 5"
          date="Jan 01"
          image={leftBg2}
        />
        <NewsCard
          category="Sports"
          headline="Headline 6"
          date="Jan 01"
          image={leftBg3}
        />
        <NewsCard
          category="Tech"
          headline="Headline 7"
          date="Jan 01"
          image={leftBg4}
        /> */}

        {/* --------------------Left Column------------------------- */}
        {/* <Grid
          container
          item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={5.9}
          xs={5.9}
          className={styles.container__left}
          alignContent="space-between"
        >
          <NewsCard
            category="Business"
            headline="Headline 1"
            date="Jan 01"
            image={leftBg1}
          />

          <NewsCard
            category="International"
            headline="Headline 3"
            date="Jan 01"
            image={leftBg2}
          />

          <NewsCard
            category="Sports"
            headline="Headline 5"
            date="Jan 01"
            image={leftBg3}
          />

          <NewsCard
            category="Tech"
            headline="Headline 7"
            date="Jan 01"
            image={leftBg4}
          />
          <NewsCard
            category="Tech"
            headline="Headline 7"
            date="Jan 01"
            image={leftBg4}
          />
        </Grid> */}
        {/* --------------------Right Column------------------------- */}
        {/* <Grid
          container
          item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={5.9}
          xs={5.9}
          className={styles.container__right}
          alignContent="space-between"
        >
          <NewsCard
            category="Sports"
            headline="Headline 2"
            date="Jan 01"
            image={rightBg1}
          />

          <NewsCard
            category="Business"
            headline="Headline 4"
            date="Jan 01"
            image={rightBg2}
          />

          <NewsCard
            category="Entertainment"
            headline="Headline 6"
            date="Jan 01"
            image={rightBg3}
          />

          <NewsCard
            category="Health"
            headline="Headline 8"
            date="Jan 01"
            image={rightBg4}
          />
        </Grid> */}
      </Grid>

      <Footer />
    </>
  );
}

export default NewsPage;
