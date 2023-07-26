import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";
import { Stack, Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Box>
      <Stack
        className="menu"
        spacing={2}
        backgroundColor="#F8F9FA"
        sx-={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        <Box
          className="item"
          width="100%"
          height="2px"
          backgroundColor="gray"
          border={"1px solid #E2E8F0"}
        ></Box>
        {menu.map((item) => (
          <Box className="item" key={item.id}>
            <Link to={item.url} className="listItem">
              {item.icon ? ( // Check if item.icon is available
                <Box
                  className="iconBox"
                  backgroundColor="#fff"
                  borderRadius="12px"
                  width="32px"
                  height="32px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  boxShadow="rgba(0, 0, 0, 0.10) 0px 3px 8px"
                  // border={"1px solid #E2E8F0"}
                >
                  <img src={item.icon} alt="" className="icon" />
                </Box>
              ) : null}
              <Typography
                className="listItemTitle"
                fontSize="14px"
                fontWeight={700}
              >
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Stack>
      <Box className="needHelp" padding={"25px 20px"} marginTop={"100px"} sx={{display: {xs: "none", sm: "block"}}}>
        <Box
          width={"32px"}
          height={"32px"}
          backgroundColor="#fff"
          borderRadius="12px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="rgba(0, 0, 0, 0.10) 0px 3px 8px"
        >
          <img src="./icons/question.png" className="icon" />
        </Box>
        <Box paddingTop={"25px"}>
          <Typography color={"#fff"} fontWeight={"700"} fontSize={"14px"}>
            Need Help?
          </Typography>
          <Typography
            color={"#fff"}
            fontWeight={"300"}
            fontSize={"14px"}
            paddingBottom={"10px"}
          >
            Please check our docs
          </Typography>
          <Link to="/" className="button">
            DOCUMENTATION
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
/**<div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItems) => (
            <Link to={listItems.url} key={listItems.id} className="listItem">
              <img src={listItems.icon} alt="" />
              <span className="listItemTitle">{listItems.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>*/

export default Menu;
