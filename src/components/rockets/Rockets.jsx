import "./rockets.scss";
import { Link } from "react-router-dom";
import React, { PureComponent } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Rockets = (props) => {
  return (
    <Box
      className="rockets"
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      padding={"20px"}
      height={"100%"}
    >
      <Box>
        <Typography color={"#fff"} fontWeight={"700"} fontSize={"18px"}>
          Work with the Rockets
        </Typography>
        <Typography color={"#fff"} fontWeight={"300"} fontSize={"14px"}>
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </Typography>
      </Box>
      <Box fontSize={"12px"} color={"#fff"} fontWeight={"700"}>
        <Link>Read more</Link>
        <ArrowForwardIcon sx={{ paddingTop: "5px", fontSize: "12px" }} />
      </Box>
    </Box>
  );
};

export default Rockets;
