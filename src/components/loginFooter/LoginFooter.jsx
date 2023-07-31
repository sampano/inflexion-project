import { Box, Typography } from "@mui/material";
import "./loginFooter.scss";
import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <Box className="footer" width={"1000px"} margin={"0 auto"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        width={"100%"}
        sx={{
          flexWrap: { xs: "wrap-reverse" },
          padding: { xs: "0 20px" },
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        <Box>
          <Typography
            fontSize={"12px"}
            fontWeight={"700"}
            color="#A0AEC0"
            sx={{ paddingTop: { xs: "20px" } }}
          >
            © 2022, Made with ❤️ by Tektorch for a better web
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"40px"}
          padding={"0 20px"}
          fontSize={"12px"}
          color="#A0AEC0"
          fontFamily={"Roboto"}
        >
          <Link>About</Link>
          <Link>Privacy</Link>
          <Link>Blog</Link>
          <Link>License</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFooter;
