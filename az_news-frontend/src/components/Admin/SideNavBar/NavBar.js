import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import GridViewIcon from "@mui/icons-material/GridView";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CategoryIcon from "@mui/icons-material/Category";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import Dashboard from "../Dashboard/Dashboard";
import ManageEditor from "../ManageEditor/ManageEditor";
import ManageCategory from "../ManageCategory/ManageCategory";
import ManageNews from "../ManageNews/ManageNews";
import ManageGallery from "../ManageGallery/ManageGallery";

import styles from "./NavBar.module.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#3b3b98",
  color: "white",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: "#3b3b98",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#3b3b98",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#3b3b98",
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [displayDashboard, setDisplayDashboard] = useState(true);
  const [displayManageEditors, setDisplayManageEditors] = useState(false);
  const [displayManageCategories, setDisplayManageCategories] = useState(false);
  const [displayManageNews, setDisplayManageNews] = useState(false);
  const [displayManageGallery, setDisplayManageGallery] = useState(false);
  const [title, setTitle] = useState("Dashboard");

  useEffect(() => {
    document.body.style.width = "100%";
  });

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        style={{ border: "2px solid green" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {[
            "Dashboard",
            "Manage Editors",
            "Manage Categories",
            "Manage News",
            "Manage Gallery",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 70,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <GridViewIcon
                      className={styles.nav__icons}
                      onClick={() => {
                        setDisplayDashboard(true);
                        setTitle("Dashbaord");
                        setDisplayManageEditors(false);
                        setDisplayManageCategories(false);
                        setDisplayManageNews(false);
                        setDisplayManageGallery(false);
                      }}
                    />
                  ) : index === 1 ? (
                    <ManageAccountsIcon
                      className={styles.nav__icons}
                      onClick={() => {
                        setDisplayDashboard(false);
                        setDisplayManageEditors(true);
                        setTitle("Manage Editors");
                        setDisplayManageCategories(false);
                        setDisplayManageNews(false);
                        setDisplayManageGallery(false);
                      }}
                    />
                  ) : index === 2 ? (
                    <CategoryIcon
                      className={styles.nav__icons}
                      onClick={() => {
                        setDisplayDashboard(false);
                        setDisplayManageEditors(false);
                        setDisplayManageCategories(true);
                        setTitle("Manage Categories");
                        setDisplayManageNews(false);
                        setDisplayManageGallery(false);
                      }}
                    />
                  ) : index === 3 ? (
                    <NewspaperIcon
                      className={styles.nav__icons}
                      onClick={() => {
                        setDisplayDashboard(false);
                        setDisplayManageEditors(false);
                        setDisplayManageCategories(false);
                        setDisplayManageNews(true);
                        setTitle("Manage News");
                        setDisplayManageGallery(false);
                      }}
                    />
                  ) : (
                    <AddPhotoAlternateIcon
                      className={styles.nav__icons}
                      onClick={() => {
                        setDisplayDashboard(false);
                        setDisplayManageEditors(false);
                        setDisplayManageCategories(false);
                        setDisplayManageNews(false);
                        setDisplayManageGallery(true);
                        setTitle("Manage Gallery");
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div
          style={{
            // border: "2px solid yellow",
            height: "-webkit-fill-available",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          {/* <Divider style={{ borderColor: "white" }} /> */}
          <List /* style={{ border: "2px solid red" }} */>
            {["Logout"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 70,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {
                      <LogoutIcon
                        className={styles.nav__icons}
                        onClick={() => {
                          console.log(localStorage.length);
                          localStorage.clear();
                          console.log(localStorage.length);
                          navigate("/home");
                        }}
                      />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {displayDashboard ? (
          <Dashboard />
        ) : displayManageEditors ? (
          <ManageEditor />
        ) : displayManageCategories ? (
          <ManageCategory />
        ) : displayManageNews ? (
          <ManageNews />
        ) : (
          <ManageGallery />
        )}
      </Box>
    </Box>
  );
}
