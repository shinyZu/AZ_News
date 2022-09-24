import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./ManageNews.module.css";

function ManageNews() {
  const [categories, setCategories] = useState([]);
  const [editors, setEditors] = useState([]);
  const [date, setDate] = useState(null);
  const [newsFormData, setNewsFormdata] = useState({
    headline: "",
    text_body: "",
    media_body: "",
    category: "",
    date: "",
    editor: "",
  });

  return (
    <>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        mt={3}
        className={styles.container}
        justifyContent="space-between"
      >
        {/* ----------------------Container Left--------------------- */}
        <Grid
          container
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={12}
          xs={12}
          mb={3}
          className={styles.container__left}
          direction="column"
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
          >
            <Autocomplete
              id="category"
              disablePortal
              style={{ width: "80%" /* , marginBottom: "7vh" */ }}
              value={newsFormData.category}
              options={categories}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
              disabledItemsFocusable
              onChange={(e, v) => {
                setNewsFormdata({
                  ...newsFormData,
                  category: v,
                });
              }}
            />
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
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Headline"
                fullWidth
                style={{ width: "80%" }}
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
              <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Description"
                fullWidth
                style={{ width: "80%" }}
              />
            </Grid>

            <Grid
              container
              item
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={10}
              justifyContent="space-between"
              className={styles.container__date__editor}
              style={{ height: "fit-content" }}
            >
              <Grid
                container
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                sm={5.8}
                xs={5.8}
                justifyContent="center"
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // label="Date"
                    value={newsFormData.date}
                    inputFormat="dd/MM/yyyy"
                    style={{ width: "80%" }}
                    onChange={(newValue) => {
                      setDate(newValue);
                      setNewsFormdata({
                        ...newsFormData,
                        date: newValue,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    disablePast
                  />
                </LocalizationProvider>
              </Grid>

              <Grid
                container
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                sm={5.8}
                xs={5.8}
                justifyContent="center"
              >
                <Autocomplete
                  id="editor"
                  disablePortal
                  fullWidth
                  // style={{ width: "80%" }}
                  value={newsFormData.editor}
                  options={editors}
                  renderInput={(params) => (
                    <TextField {...params} label="Editor" />
                  )}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    setNewsFormdata({
                      ...newsFormData,
                      editor: v,
                    });
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ----------------------Container Right--------------------- */}

        <Grid
          container
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={12}
          xs={12}
          className={styles.container__right}
          alignContent="start"
        >
          <Grid
            container
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            justifyContent="space-between"
            alignItems="center"
            className={styles.container__upload__1}
          >
            <Typography variant="h5">Upload Media</Typography>
            <button className={styles.btn__browse}>Browse</button>
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
            className={styles.container__upload__2}
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
              className={styles.container__upload__box}
            ></Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              mt={3}
              className={styles.container__btn}
              justifyContent="space-between"
            >
              <button className={styles.btn__cancel}>Cancel</button>
              <button className={styles.btn__delete}>Delete</button>
              <button className={styles.btn__preview}>Preview</button>
              <button className={styles.btn__update}>Update</button>
              <button className={styles.btn__publish}>Publish</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ManageNews;
