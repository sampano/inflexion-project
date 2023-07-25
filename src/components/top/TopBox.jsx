import React from "react";
import "./topbox.scss";
import { topDealUsers } from "../../data";
import { Box, Typography } from "@mui/material";

const TopBox = (props) => {
  return (
    <Box className="topbox" display={"flex"} justifyContent={"space-between"}>
      <Box>
        <Typography fontSize={"12px"}>{props.title}</Typography>
        <Typography fontSize={"18px"} fontWeight={"700"} color={"#2D3748"}>
          {props.amount}
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "#E53E3E" : "#48BB78" }}
          >
            {props.percentage}%
          </span>
        </Typography>
      </Box>
      <Box
        width={"45px"}
        height={"45px"}
        backgroundColor={"#4FD1C5"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <img src={props.icon} style={{ width: "24px", height: "24px" }} />
      </Box>
    </Box>
  );
};

export default TopBox;
