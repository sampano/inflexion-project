import "./navbar.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <Box className="navbar" gap="30px">
      <Box className="logo" width="320px">
        <img src="./logo/logo.png" alt="" />
        <Typography color="#2D3748" fontSize="14px" fontWeight="700">
          VANDELAY INDUSTRIES
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box className="pageTitle">
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
            <Typography fontSize="12px" fontWeight="700">
              Sign In
            </Typography>
          </Link>
          <NotificationsIcon className="icon"></NotificationsIcon>
          <SettingsIcon className="icon"></SettingsIcon>
          {/* <Box className="notification">
          <img src="notifications.svg" alt="" className="" />
          <span>1</span>
        </Box> 
        <Box className="user">
          <img
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
            alt=""
            className=""
          />
        </Box>*/}
          <img src="settings.svg" alt="" className="icon" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
