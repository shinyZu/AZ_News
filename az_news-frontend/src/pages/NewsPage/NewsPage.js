import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../../components/Home/Footer/Footer";

import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";
import NewsCard from "../../components/00_common/NewsCard/NewsCard";
import CardTag from "../../components/00_common/CardTag/CardTag";

import styles from "./NewsPage.module.css";

// import img1 from "../../assets/images/business/business1.jpeg";
// import img2 from "../../assets/images/sports/sports2.jpeg";
// import img3 from "../../assets/images/other/health1.jpeg";
// import img4 from "../../assets/images/other/international1.jpeg";
// import img5 from "../../assets/images/tech/tech2.png";
// import img6 from "../../assets/images/sports/sports1.jpeg";
// import img7 from "../../assets/images/entertainment/entertainment1.jpeg";
// import img8 from "../../assets/images/other/queen.jpg";
// import img8 from "../../assets/images/entertainment/entertainment1.jpeg";

import NewsService from "../../services/NewsService";

function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  // const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8];
  // const [image, setImage] = useState("");

  const navigate = useNavigate();
  // const imageURL = "http://localhost:4000/az_news/api/v1/news/file/";
  const imageURL = "http://104.43.57.150:4000/az_news/api/v1/news/file/";

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = async () => {
    let res = await NewsService.getAll();

    if (res.status == 200) {
      setNewsList(res.data);
    }
  };

  const loadNews = async (id) => {
    let res = await NewsService.searchById(id);

    if (res.status == 200) {
      let filename = res.data.media_body.split("/file/")[1];
      // console.log(filename); // 1664051735522-car.png
    }
  };

  return (
    <>
      <Header />
      <NavBar />

      <Grid
        container
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        // style={{ border: "2px solid green" }}
        className={styles.container}
        justifyContent="space-between"
      >
        {newsList.map((news, index) => {
          return (
            // <Grid
            //   container
            //   item
            //   xl={6}
            //   lg={6}
            //   md={12}
            //   sm={12}
            //   xs={12}
            //   style={{ border: "2px solid green" }}
            //   // className={styles.container}
            //   justifyContent="space-between"
            // >
            <Link
              key={index}
              to="/news/detail"
              state={{
                news: news,
                // image: imageArray[index],
              }}
              className={styles.card_text}
              onClick={() => loadNews(news._id)}
            >
              <NewsCard
                key={news._id}
                category={news.category}
                headline={news.headline}
                date={news.date}
                // image={imageArray[index]}
                image={imageURL + news.media_body.split("/file/")[1]}
              />
            </Link>
            // </Grid>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
}

export default NewsPage;
