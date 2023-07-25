import "./activeUsers.scss";
import { Link } from "react-router-dom";
import React, { PureComponent } from "react";
import { Box, Typography } from "@mui/material";
import { activeUsers } from "../../data";

const ActiveUsers = (props) => {
  return (
    <Box>
      <Box paddingBottom={"30px"}>
        <img src="./img/graph.png" style={{ width: "100%" }} />
      </Box>
      <Box paddingBottom={"30px"}>
        <Typography color={"#2D3748"} fontSize={"18px"} fontWeight={"700"}>
          Active User
        </Typography>
        <Typography fontSize={"14px"}>
          <span style={{ color: "#48BB78", fontWeight: "700" }}>(+23)</span>{" "}
          than last week
        </Typography>
      </Box>
      <Box
        paddingBottom={"30px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {activeUsers.map((userDetails) => (
          <Box paddingBottom={"10px"} width={"30%"} key={userDetails.title}>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              paddingBottom={"15px"}
              gap={"10px"}
            >
              <Box
                width={"25px"}
                height={"25px"}
                backgroundColor={"#4FD1C5"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"10px"}
              >
                <img src={userDetails.icon} alt={userDetails.title} />
              </Box>
              <Typography fontSize={"12px"} fontWeight={"700"}>
                {userDetails.title}
              </Typography>
            </Box>
            <Typography fontSize={"18px"} fontWeight={"700"} color={"#2D3748"}>
              {userDetails.amount}
            </Typography>
            <Box width={"100px"} height={"2px"} backgroundColor={"#E5E5E5"}>
              <Box
                width={"50px"}
                height={"2px"}
                backgroundColor={"#4FD1C5"}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActiveUsers;
