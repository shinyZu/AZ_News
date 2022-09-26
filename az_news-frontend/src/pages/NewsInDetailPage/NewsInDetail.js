import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardTag from "../../components/00_common/CardTag/CardTag";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";
import NavBar from "../../components/Home/NavBar/NavBar";
import MyButton from "../../components/00_common/Button/Button";
import CategoryChip from "../../components/00_common/CardTag/Chip";
import CategoryService from "../../services/CategoryService";

import styles from "./NewsInDetail.module.css";
import bg1 from "../../assets/images/entertainment/entertainment1.jpeg";
import EditorService from "../../services/EditorService";

function NewsInDetail() {
  const [editorName, setEditorName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [monthDate, setMonthDate] = useState("");
  const [chipColor, setChipColor] = useState("");
  const [media, setMedia] = useState(bg1);

  const location = useLocation();
  const { news } = location.state;

  useEffect(() => {
    getCategoryName(news.category);
    formatDate(news.date);
    getEditorName(news.editor);

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
  }, [editorName, categoryName, monthDate]);

  const getEditorName = async (id) => {
    let res = await EditorService.searchById(id);
    if (res.status == 200) {
      setEditorName(res.data.name);
    }
  };

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
      <Header />
      <NavBar />

      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={styles.container__main}
      >
        {/* ----------- Category chip --------- */}

        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__1}
          justifyContent="space-between"
          alignContent="center"
        >
          <CategoryChip
            label={categoryName}
            chip_color={chipColor}
            style={{
              padding: "1vw",
              border: `1px solid ${chipColor}`,
              backgroundColor: `${chipColor}`,
              color: "white",
              marginBottom: "0",
            }}
          />
          {/* <MyButton
            label="Share"
            className={styles.btn__share}
            size="small"
            variant="filled"
            color="red"
          /> */}
        </Grid>

        {/* ----------- Headline Bar --------- */}

        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__2}
        >
          <Typography variant="h4" className={styles.category__text}>
            {news.headline}
          </Typography>
        </Grid>

        {/* ----------- Author, Date, Views, Comments ,Share, Edit Bar --------- */}

        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__3}
          alignContent="center"
        >
          <Grid
            container
            item
            xl={7}
            lg={7}
            md={7}
            sm={7}
            xs={7}
            className={styles.container__3}
            // justifyContent="space-between
            alignContent="center"
          >
            <CategoryChip
              label={editorName}
              chip_color="white"
              style={{
                padding: "10px",
                border: "1px solid black",
                color: "black !important",
                marginBottom: "2%",
                marginRight: "2%",
              }}
            />

            <CategoryChip
              label={monthDate}
              chip_color="white"
              style={{
                padding: "10px",
                border: "1px solid black",
                color: "black !important",
                marginBottom: "0",
                marginBottom: "2%",
                marginRight: "2%",
              }}
            />

            <CategoryChip
              label="Views"
              chip_color="white"
              style={{
                padding: "10px",
                border: "1px solid black",
                color: "black !important",
                marginBottom: "0",
                marginBottom: "2%",
                marginRight: "2%",
              }}
            />

            <CategoryChip
              label="Comments"
              chip_color="white"
              style={{
                padding: "10px",
                border: "1px solid black",
                color: "black !important",
                marginBottom: "0",
                marginBottom: "2%",
                marginRight: "2%",
              }}
            />
          </Grid>

          <Grid
            container
            item
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className={styles.container__3}
            alignContent="center"
            justifyContent="end"
          >
            <CategoryChip
              label="Share"
              chip_color="white"
              style={{
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "transparent",
                color: "black !important",
                cursor: "pointer",
                marginBottom: "2%",
                marginRight: "2%",
              }}
            />
            <Link
              to="/login"
              state={{
                purpose: "Edit",
                news: news,
              }}
              className={styles.card_text}
            >
              <CategoryChip
                label="Edit"
                chip_color="white"
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  color: "black !important",
                  cursor: "pointer",
                  marginBottom: "2%",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#16a085 !important",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>

        {/* ----------- Image Box --------- */}

        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          justifyContent="center"
          className={styles.container__4}
        >
          <Grid
            container
            // item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            mt={2}
            className={styles.container__image__box}
            style={{ backgroundImage: `url${media}` }}
          >
            <img
              src={media}
              // alt={categoryName}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>

        {/* ----------- Description Box --------- */}

        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__5}
        >
          <Typography variant="h7" className={styles.description}>
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout. Lorem ipsum is mostly a part of a Latin text by the
            classical author and philosopher Cicero. Its words and letters have
            been changed by addition or removal, so to deliberately render its
            content nonsensical; it's not genuine, correct, or comprehensible
            Latin anymore. While lorem ipsum's still resembles classical Latin,
            it actually has no meaning whatsoever. As Cicero's text doesn't
            contain the letters K, W, or Z, alien to latin, these, and others
            are often inserted randomly to mimic the typographic appearence of
            European languages, as are digraphs not to be found in the original.
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented with the
            actual content still not being ready. Think of a news blog that's
            filled with content hourly on the day of going live. However,
            reviewers tend to be distracted by comprehensible content, say, a
            random text copied from a newspaper or the internet. The are likely
            to focus on the text, disregarding the layout and its elements.
            Besides, random text risks to be unintendedly humorous or offensive,
            an unacceptable risk in corporate environments. Lorem ipsum and its
            many variants have been employed since the early 1960ies, and quite
            likely since the sixteenth century.
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default NewsInDetail;
