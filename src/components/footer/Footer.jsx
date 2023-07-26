import { Box, Typography } from "@mui/material";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Box
        width={"320px"}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      ></Box>
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
          <Typography fontSize={"12px"} sx={{ paddingTop: { xs: "20px" } }}>
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

export default Footer;
