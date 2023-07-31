import "./loginNavbar.scss";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { logiNavbarLinks } from "../../data";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
const LoginNavbar = () => {
  return (
    <Box
      width={"1000px"}
      margin={"0 auto"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      borderRadius={"25px"}
    >
      <AppBar
        className="loginNavbar"
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "15px 0",
        }}
      >
        <Toolbar>
          <Box
            display={"flex"}
            alignItems={"center"}
            className="logo"
            sx={{
              width: { xs: "auto", sm: "320px" },
              paddingRight: { xs: "30px", sm: "0" },
            }}
          >
            <img
              src="/inflexion-project/logo/logo.png"
              alt=""
              style={{ marginRight: "10px" }}
            />
            <Typography
              color="#2D3748"
              fontSize="14px"
              fontWeight="700"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              VANDELAY INDUSTRIES
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            margin={"0 auto"}
          >
            <Box
              className="pageTitle"
              sx={{ display: { xs: "none", sm: "flex" } }}
              gap={"30px"}
            >
              {logiNavbarLinks.map((item) => {
                return (
                  <Box key={item.id} display={"flex"} gap={"10px"}>
                    <Box width={"15px"} height={"15px"}>
                      <img src={item.icon} alt={item.name} />
                    </Box>
                    <Link>
                      <Typography
                        color="#2D3748"
                        fontSize="12px"
                        fontWeight="700"
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                background:
                  "linear-gradient(90deg, rgba(49,56,96,1) 0%, rgba(21,25,40,1) 100%)",
                color: "white",
                padding: "10px 50px",
                border: "none",
                borderRadius: "35px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              FreeDownload
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoginNavbar;
