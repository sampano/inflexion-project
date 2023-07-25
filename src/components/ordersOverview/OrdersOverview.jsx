import "./ordersOverview.scss";
import { Link } from "react-router-dom";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { ordersOverview } from "../../data";

const OrdersOverview = () => {
  return (
    <Box className="orders">
      <Box paddingBottom={"30px"}>
        <Typography color={"#2D3748"} fontSize={"18px"} fontWeight={"700"}>
          Orders Overview
        </Typography>
        <Typography fontSize={"14px"}>
          <span style={{ color: "#48BB78", fontWeight: "700" }}>+30%</span> this
          month
        </Typography>
      </Box>
      {ordersOverview.map((item) => {
        return (
          <Box
            key={item.id}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"20px"}
            marginBottom={"10px"}
            className="ordersItem"
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <img src={item.icon} />
              <Box
                className="ordersLine"
                width={"2px"}
                height={"50px"}
                backgroundColor={"#E2E8F0"}
              ></Box>
            </Box>
            <Box>
              <Typography
                fontSize={"14px"}
                fontWeight={"700"}
                color={"#2D3748"}
              >
                {item.orderDetails}
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={"700"}
                color={"#A0AEC0"}
              >
                {item.date}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default OrdersOverview;
