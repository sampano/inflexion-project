import "./navbar.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "15px 0",
      }}
    >
      <Toolbar className="navbar">
        <Box
          className="logo"
          sx={{
            width: { xs: "auto", sm: "320px" },
            paddingRight: { xs: "30px", sm: "0" },
          }}
        >
          <img src="./logo/logo.png" alt="" />
          <Typography
            color="#2D3748"
            fontSize="14px"
            fontWeight="700"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            VANDELAY INDUSTRIES
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" width="100%">
          <Box
            className="pageTitle"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box>
              <Box display="flex">
                <Typography color="#2D3748" paddingRight="5px" fontSize="12px">
                  Pages
                </Typography>
                <span>/</span>
                <Typography
                  color="#2D3748"
                  paddingLeft="5px"
                  fontSize="12px"
                  fontWeight="700"
                >
                  Dashboard
                </Typography>
              </Box>
              <Typography color="#2D3748" fontSize="14px" fontWeight="700">
                Dashboard
              </Typography>
            </Box>
          </Box>
          <Box className="icons">
            <Box position="relative">
              <InputBase
                placeholder="search"
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 50px",
                  borderRadius: "25px",
                  border: "1px solid #E2E8F0",
                }}
              ></InputBase>

              <SearchIcon
                className="icon search-icon"
                sx={{
                  position: "absolute",
                  left: "10px",
                  top: "15px",
                  color: "#2D3748",
                }}
              ></SearchIcon>
            </Box>
            <Link to="/sign" className="signin">
              <PersonIcon className="icon"></PersonIcon>
              <Typography
                fontSize="12px"
                fontWeight="700"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Sign In
              </Typography>
            </Link>
            <NotificationsIcon
              className="icon"
              sx={{ display: { xs: "none", sm: "block" } }}
            ></NotificationsIcon>
            <SettingsIcon
              className="icon"
              sx={{ display: { xs: "none", sm: "block" } }}
            ></SettingsIcon>
            <img src="settings.svg" alt="" className="iconImg" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
