import { Box, Typography } from "@mui/material";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Box width={"320px"}></Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Box>
          <Typography>
            © 2022, Made with ❤️ by Tektorch for a better web
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"40px"}
          padding={"0 20px"}
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
