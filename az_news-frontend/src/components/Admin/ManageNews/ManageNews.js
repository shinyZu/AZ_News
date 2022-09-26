import { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MySnackBar from "../../00_common/SnackBar/MySnackBar";
import ConfirmDialog from "../../00_common/ConfirmDialog/ConfirmDialog";

import styles from "./ManageNews.module.css";

import CategoryService from "../../../services/CategoryService";
import EditorService from "../../../services/EditorService";
import NewsService from "../../../services/NewsService";

// import bg1 from "../../../assets/images/other/gallery1.png";

function ManageNews(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [editorList, setEditorList] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [editorName, setEditorName] = useState("");
  const [media, setMedia] = useState(null);
  const [date, setDate] = useState(null);

  const [newsFormData, setNewsFormdata] = useState({
    headline: "",
    text_body: "",
    media_body: "",
    category: "",
    date: "",
    editor: "",
  });

  const [openAlert, setOpenAlert] = useState({
    open: "",
    alert: "",
    severity: "",
    variant: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    confirmBtnStyle: {},
    action: "",
  });

  const [newsData, setNewsData] = useState([]);
  const [action, setAction] = useState("Normal");

  const location = useLocation();

  useEffect(() => {
    getAllCategories();
    getAllEditors();
  }, []);

  useEffect(() => {
    if (location.state == null) {
      console.log("ManageNews state is null");
    } else {
      if (location.state != null || location.state.news != null) {
        const { news, purpose } = location.state;
        setNewsData(news);
        setAction(purpose);
        loadDataToFields();
      }
    }

    getEditorName(newsData.editor);
    getCategoryName(newsData.category);
  }, [newsData, action]);

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

  const loadDataToFields = () => {
    setNewsFormdata({
      headline: newsData.headline,
      text_body: newsData.text_body,
      media_body: newsData.media_body,
      category: newsData.category,
      date: newsData.date,
      editor: newsData.editor,
    });
  };

  const getAllCategories = async () => {
    let res = await CategoryService.getAll();
    if (res.status === 200) {
      if (res.data != []) {
        let categories = res.data;
        // console.log(categories);
        setCategoryList([]);

        categories.map((category, index) => {
          setCategoryList((prev) => {
            return [
              ...prev,
              { categoryId: category._id, categoryTitle: category.category },
            ];
          });
        });
        // console.log(editorList);
      }
    }
  };

  const getAllEditors = async () => {
    let res = await EditorService.getAll();
    // console.log(res);
    if (res.status === 200) {
      if (res.data != []) {
        let editors = res.data;
        // console.log(editors);
        setEditorList([]);

        editors.map((editor, index) => {
          setEditorList((prev) => {
            return [...prev, { editorId: editor._id, editorName: editor.name }];
          });
        });
        // console.log(editorList);
      }
    }
  };

  const clearForm = () => {
    setNewsFormdata({
      headline: "",
      text_body: "",
      media_body: "",
      category: "",
      date: "",
      editor: "",
    });
    setDate(null);
    setEditorName("");
    setCategoryName("");
    setMedia(null);
  };

  // Preview Image
  const handleMediaUpload = (e) => {
    const { files } = e.target;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const { result } = e.target;
      // console.log(result);
      if (result) {
        setMedia(result);
      }
    };
    fileReader.readAsDataURL(files[0]);
  };

  const publishNews = async () => {
    if (
      newsFormData.headline === "" ||
      newsFormData.text_body === "" ||
      newsFormData.media_body == null ||
      newsFormData.category === "" ||
      newsFormData.date === "" ||
      newsFormData.editor === ""
    ) {
      setOpenAlert({
        open: true,
        alert: "Please fill all inputs!",
        severity: "error",
        variant: "standard",
      });
      return;
    }

    // console.log(newsFormData);

    let data = new FormData();
    data.append("headline", newsFormData.headline);
    data.append("text_body", newsFormData.text_body);
    data.append("media_body", newsFormData.media_body);
    data.append("category", newsFormData.category);
    data.append("date", newsFormData.date);
    data.append("editor", newsFormData.editor);

    // console.log(data);

    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to Publish this News ?",
      subTitle: "You can't revert this operation",
      action: "Save",
      confirmBtnStyle: {
        backgroundColor: "rgb(26, 188, 156)",
        color: "white",
      },
      onConfirm: async () => {
        let res = await NewsService.publish(data);
        if (res.status === 201) {
          setOpenAlert({
            open: true,
            alert: "News Published Successfully!!!",
            severity: "success",
            variant: "standard",
          });
          setConfirmDialog({ isOpen: false });
          clearForm();
        } else {
          setOpenAlert({
            open: true,
            alert: res.response.data.message,
            severity: "error",
            variant: "standard",
          });
          setConfirmDialog({ isOpen: false });
        }
      },
    });
  };

  let data = new FormData();
  const updateNews = async () => {
    console.log(newsFormData);
    if (
      newsFormData.headline === "" ||
      newsFormData.text_body === "" ||
      newsFormData.media_body == null ||
      newsFormData.category === "" ||
      newsFormData.date === "" ||
      newsFormData.editor === ""
    ) {
      setOpenAlert({
        open: true,
        alert: "Please fill all inputs!",
        severity: "error",
        variant: "standard",
      });
      return;
    }

    data.append("headline", newsFormData.headline);
    data.append("text_body", newsFormData.text_body);
    data.append("media_body", newsFormData.media_body);
    data.append("category", newsFormData.category);
    data.append("date", newsFormData.date);
    data.append("editor", newsFormData.editor);

    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to Update this News ?",
      subTitle: "You can't revert this operation",
      action: "Update",
      confirmBtnStyle: {
        backgroundColor: "rgb(26, 188, 156)",
        color: "white",
      },
      onConfirm: async () => {
        let res = await NewsService.updateNews(newsData._id, data);
        if (res.status === 200) {
          setOpenAlert({
            open: true,
            alert: "News Updated Successfully!!!",
            severity: "success",
            variant: "standard",
          });
          setConfirmDialog({ isOpen: false });
          clearForm();
        } else {
          setOpenAlert({
            open: true,
            alert: res.response.data.message,
            severity: "error",
            variant: "standard",
          });
          setConfirmDialog({ isOpen: false });
        }
      },
    });
  };

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
              options={categoryList}
              getOptionLabel={(option) => option.categoryTitle}
              inputValue={categoryName}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
              disabledItemsFocusable
              onChange={(e, v) => {
                setCategoryName(v.categoryTitle);
                setNewsFormdata({
                  ...newsFormData,
                  category: v.categoryId,
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
                value={newsFormData.headline}
                onChange={(e) => {
                  setNewsFormdata({
                    ...newsFormData,
                    headline: e.target.value,
                  });
                }}
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
                value={newsFormData.text_body}
                onChange={(e) => {
                  console.log(e);
                  setNewsFormdata({
                    ...newsFormData,
                    text_body: e.target.value,
                  });
                }}
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
              // className={styles.container__date__editor}
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
                    className="text-center border-l-4 border-red-500  w-full p-3 rounded text-sm  outline-none  focus:ring-0 bg-transparent"
                    value={date}
                    style={{ width: "80%" }}
                    onChange={(newValue) => {
                      setDate(newValue);
                      setNewsFormdata({
                        ...newsFormData,
                        // date: new Date(newValue).toISOString().split("T")[0],
                        date: newValue,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    // disablePast
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
                  options={editorList}
                  getOptionLabel={(option) => option.editorName}
                  inputValue={editorName}
                  renderInput={(params) => (
                    <TextField {...params} label="Editor" />
                  )}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    setEditorName(v.editorName);
                    setNewsFormdata({
                      ...newsFormData,
                      editor: v.editorId,
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

            <Button
              component="label"
              variant="outlined"
              className={styles.btn__browse}
              style={{
                backgroundColor: "#16a085",
                color: "white",
                border: "none",
                // height: "50px",
              }}
            >
              Browse
              <input
                type="file"
                accept="*"
                hidden
                onChange={(e) => {
                  handleMediaUpload(e);
                  setNewsFormdata({
                    ...newsFormData,
                    media_body: e.target.files[0],
                  });
                  console.log(newsFormData);
                  setMedia(e.target.files[0]);
                }}
              />
            </Button>
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
              // item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              mt={2}
              className={styles.container__upload__box}
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
            {/* / */}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xl={11}
          lg={11}
          md={11}
          sm={11}
          xs={11}
          ml={8}
          justifyContent="center"
          alignItems="center"
          // style={{ border: "2px solid red" }}
        >
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
            <button className={styles.btn__cancel} onClick={clearForm}>
              Cancel
            </button>
            <button className={styles.btn__delete}>Delete</button>
            <button className={styles.btn__preview}>Preview</button>
            <button
              className={styles.btn__update}
              onClick={() => {
                updateNews();
              }}
            >
              Update
            </button>
            <button
              className={styles.btn__publish}
              onClick={() => {
                publishNews();
                // clearForm();
              }}
            >
              Publish
            </button>
          </Grid>
        </Grid>
      </Grid>
      <MySnackBar
        open={openAlert.open}
        alert={openAlert.alert}
        severity={openAlert.severity}
        variant={openAlert.variant}
        onClose={() => {
          setOpenAlert({ open: false });
        }}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default ManageNews;
