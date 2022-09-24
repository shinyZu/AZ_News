import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MySnackBar from "../../00_common/SnackBar/MySnackBar";

import styles from "./ManageEditor.module.css";
import EditorService from "../../../services/EditorService";
import ConfirmDialog from "../../00_common/ConfirmDialog/ConfirmDialog";

function ManageEditor() {
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

  const [editorFormData, setEditorFormData] = useState({
    editor_nic: "",
    name: "",
    address: "",
    email: "",
    contact_no: "",
  });

  const [categoryFormData, setCategoryFormData] = useState({
    category_code: "",
    category: "",
    description: "",
  });

  const clearEditorForm = () => {
    setEditorFormData({
      editor_nic: "",
      name: "",
      address: "",
      email: "",
      contact_no: "",
    });
  };

  const clearCategoryForm = () => {
    setCategoryFormData({ category_code: "", category: "", description: "" });
  };

  // useEffect(() => {
  //   getAllEditors();
  // });

  // const getAllEditors = async () => {
  //   let res = await EditorService.getAll();
  //   console.log(res);
  // };

  const saveEditor = async () => {
    // console.log(editorFormData);
    let res = await EditorService.saveEditor(editorFormData);
    if (res.status === 201) {
      // console.log(res.data);
      setConfirmDialog({
        isOpen: true,
        title: "Are you sure you want to Save this Editor ?",
        subTitle: "You can't revert this operation",
        action: "Save",
        confirmBtnStyle: {
          backgroundColor: "rgb(26, 188, 156)",
          color: "white",
        },
        onConfirm: async () => {
          setOpenAlert({
            open: true,
            alert: "Editor Saved Successfully!!!",
            severity: "success",
            variant: "standard",
          });
          setConfirmDialog({ isOpen: false });
          clearEditorForm();
        },
      });
    } else {
      setOpenAlert({
        open: true,
        alert: res.response.data.message,
        severity: "error",
        variant: "standard",
      });
      setConfirmDialog({ isOpen: false });
    }
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
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.container__main}
          justifyContent="space-between"
        >
          {/* ---------------------Add New Editor-------------------------- */}

          <Grid
            container
            item
            xl={5.9}
            lg={5.9}
            md={5.9}
            sm={12}
            xs={12}
            className={styles.container__left}
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
              className={styles.title}
              justifyContent="center"
            >
              <Typography variant="h5">New Editor</Typography>
            </Grid>
            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              mt={2}
              // rowGap={2}
              className={styles.container_editor_form}
              justifyContent="center"
            >
              <ValidatorForm onSubmit={saveEditor}>
                <Grid
                  container
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  rowGap={2}
                  justifyContent="center"
                >
                  <Grid
                    container
                    item
                    xl={10}
                    lg={10}
                    md={10}
                    sm={10}
                    xs={10}
                    // className={styles.input}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="NIC No"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^[0-9]{9}[v]|[0-9]{12}$"]}
                      errorMessages={["Invalid NIC No"]}
                      value={editorFormData.editor_nic}
                      onChange={(e) => {
                        setEditorFormData({
                          ...editorFormData,
                          editor_nic: e.target.value,
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
                    // className={styles.input}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Editor's Name"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^[A-z\\s]*$"]}
                      errorMessages={["Invalid Name"]}
                      value={editorFormData.name}
                      onChange={(e) => {
                        setEditorFormData({
                          ...editorFormData,
                          name: e.target.value,
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
                    // className={styles.input}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Address"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^[A-z]*$"]}
                      errorMessages={["Invalid Address"]}
                      value={editorFormData.address}
                      onChange={(e) => {
                        setEditorFormData({
                          ...editorFormData,
                          address: e.target.value,
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
                    // className={styles.input}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Email"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={[
                        "matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$",
                      ]}
                      errorMessages={["Invalid Email"]}
                      value={editorFormData.email}
                      onChange={(e) => {
                        setEditorFormData({
                          ...editorFormData,
                          email: e.target.value,
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
                    // className={styles.input}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Contact No"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^[0-9]{10}$"]}
                      errorMessages={["Max characters 10, Use only numbers."]}
                      value={editorFormData.contact_no}
                      onChange={(e) => {
                        setEditorFormData({
                          ...editorFormData,
                          contact_no: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid
                    container
                    xl={10}
                    lg={10}
                    md={10}
                    xs={10}
                    sm={10}
                    // style={{ border: "2px solid red" }}
                    justifyContent="space-between"
                  >
                    <Grid
                      container
                      xl={5.9}
                      lg={5.9}
                      md={5.9}
                      xs={5.9}
                      sm={5.9}
                      // style={{ border: "2px solid blue" }}
                    >
                      <button
                        type="button"
                        className={styles.btn__cancel}
                        onClick={(e) => {
                          clearEditorForm();
                        }}
                      >
                        Cancel
                      </button>
                    </Grid>
                    <Grid
                      container
                      xl={5.9}
                      lg={5.9}
                      md={5.9}
                      xs={5.9}
                      sm={5.9}
                      // style={{ border: "2px solid blue" }}
                    >
                      <button type="submit" className={styles.btn__save}>
                        Save
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Grid>
          </Grid>

          {/* ---------------------Add New Category-------------------------- */}

          <Grid
            container
            item
            xl={5.9}
            lg={5.9}
            md={5.9}
            sm={12}
            xs={12}
            // mt={5}
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
              mt={2}
              className={styles.title}
              justifyContent="center"
            >
              <Typography variant="h5">New Category</Typography>
            </Grid>

            <Grid
              container
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              // mt={3}
              // rowGap={2}
              className={styles.container__category__form}
              justifyContent="center"
            >
              <ValidatorForm>
                <Grid
                  container
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  rowGap={2}
                  justifyContent="center"
                >
                  <Grid
                    container
                    item
                    xl={10}
                    lg={10}
                    md={10}
                    sm={10}
                    xs={10}
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Category Code"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^(CTG-00)[0-9]*$"]}
                      errorMessages={["Invalid Category Code"]}
                      value={categoryFormData.category_code}
                      onChange={(e) => {
                        setCategoryFormData({
                          ...categoryFormData,
                          category_code: e.target.value,
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
                    direction="column"
                    justifyContent="center"
                  >
                    <TextValidator
                      label="Editor's Name"
                      type="text"
                      variant="outlined"
                      // size="small"
                      fullWidth
                      validators={["matchRegexp:^[A-z]*$"]}
                      errorMessages={["Invalid Category"]}
                      value={categoryFormData.category}
                      onChange={(e) => {
                        setCategoryFormData({
                          ...categoryFormData,
                          category: e.target.value,
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
                    direction="column"
                    justifyContent="center"
                  >
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={10.5}
                      placeholder="Description"
                      fullWidth
                    />
                  </Grid>

                  <Grid
                    container
                    xl={10}
                    lg={10}
                    md={10}
                    xs={10}
                    sm={10}
                    justifyContent="space-between"
                  >
                    <Grid
                      container
                      xl={5.9}
                      lg={5.9}
                      md={5.9}
                      xs={5.9}
                      sm={5.9}
                      // style={{ border: "2px solid blue" }}
                    >
                      <button
                        type="button"
                        className={styles.btn__cancel}
                        onClick={(e) => {
                          console.log(e.target.innerText);
                        }}
                      >
                        Cancel
                      </button>
                    </Grid>
                    <Grid
                      container
                      xl={5.9}
                      lg={5.9}
                      md={5.9}
                      xs={5.9}
                      sm={5.9}
                      // style={{ border: "2px solid blue" }}
                    >
                      <button
                        type="submit"
                        className={styles.btn__save}
                        onClick={(e) => {
                          console.log(e.target.innerText);
                        }}
                      >
                        Save
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Grid>
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

export default ManageEditor;
