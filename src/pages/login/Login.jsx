import "./login.scss";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, InputBase, InputLabel, Switch, Toolbar } from "@mui/material";
import LoginNavbar from "../../components/loginNavbar/LoginNavbar";
import LoginFooter from "../../components/loginFooter/LoginFooter";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <Box>
        <LoginNavbar />
      </Box>
      <Box
        marginTop={"150px"}
        marginBottom={"150px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"900px"}>
          <Typography fontSize={"32px"} color={"#4FD1C5"} fontWeight={"700"}>
            Welcome Back
          </Typography>
          <Typography color={"#A0AEC0"} fontSize={"14px"} fontWeight={"700"}>
            Enter your email and password to sign in
          </Typography>
          <Box width={"40%"} marginTop={"30px"}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <InputLabel>Email</InputLabel>
              <InputBase
                placeholder="Your email address"
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  borderRadius: "15px",
                  border: "1px solid #E2E8F0",
                  width: "100%",
                  marginBottom: "30px",
                }}
              ></InputBase>
              <InputLabel>Password</InputLabel>
              <InputBase
                placeholder="Your password"
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  borderRadius: "15px",
                  border: "1px solid #E2E8F0",
                  width: "100%",
                  marginBottom: "30px",
                }}
              ></InputBase>
              <FormControlLabel
                sx={{ fontSize: "12px" }}
                control={<Switch value="remember" sx={{ color: "#4FD1C5" }} />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#4FD1C5",
                  padding: "12px 10px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  color: "#fff",
                }}
              >
                Sign In
              </Button>

              <Box textAlign={"center"}>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                  color={"#A0AEC0"}
                >
                  Don't have an account?{" "}
                  <span style={{ color: "#4FD1C5", fontWeight: "700" }}>
                    Sign Up
                  </span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width={"800px"}
          height={"800px"}
          backgroundColor={"#5CE1CA"}
          position={"absolute"}
          zIndex={"-100"}
          top={"0"}
          right={"0"}
          sx={{ borderBottomLeftRadius: "25px" }}
          textAlign={"center"}
        >
          <img
            src="/inflexion-project/img/brush01.png"
            style={{
              position: "absolute",
              top: "-50px",
              right: "0",
              width: "120%",
            }}
          />
          <img
            src="/inflexion-project/img/brush02.png"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "120%",
            }}
          />
          <img
            src="/inflexion-project/logo/chakraLogo.png"
            alt="Chakra Logo"
            style={{ marginTop: "380px" }}
          />
        </Box>
      </Box>
      <LoginFooter />
    </Box>
  );
}
