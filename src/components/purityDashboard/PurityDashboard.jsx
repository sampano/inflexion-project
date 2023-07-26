import "./purityDashboard.scss";
import { Link } from "react-router-dom";
import React, { PureComponent } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const PurityDashboard = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            fontSize={"12px"}
            fontWeight={"700"}
            marginBottom={"10px"}
          >
            Built by Developers
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={"700"}
            color={"#2D3748"}
            marginBottom={"10px"}
          >
            Purity UI Dashboard
          </Typography>
          <Typography
            fontSize={"14px"}
            fontWeight={"300"}
            marginBottom={"10px"}
          >
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </Typography>
        </Box>
        <Box fontSize={"12px"} color={"#2D3748"} fontWeight={"700"}>
          <Link>Read more</Link>
          <ArrowForwardIcon sx={{ paddingTop: "5px", fontSize: "12px" }} />
        </Box>
      </Box>
      <Box>
        <img
          className="chakraImg"
          src="./img/chakra.png"
          style={{ borderRadius: "15px" }}
        />
      </Box>
    </Box>
  );
};

export default PurityDashboard;
