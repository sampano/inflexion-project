import "./authorsTable.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const columns = [
  {
    field: "author",
    headerName: "AUTHOR",
    width: 500,
    renderCell: (params) => (
      <Box className="authorCol1">{params.row.author}</Box>
    ),
  },
  {
    field: "function",
    headerName: "FUNCTION",
    width: 300,
    renderCell: (params) => (
      <Box className="authorCol2">{params.row.function}</Box>
    ),
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 300,
    renderCell: (params) => (
      <Box className="authorCol3">{params.row.status}</Box>
    ),
  },
  {
    field: "emoployed",
    headerName: "Employed",
    width: 200,
    renderCell: (params) => (
      <Box className="authorCol4">{params.row.employed}</Box>
    ),
  },
  {
    field: "edit",
    headerName: "",
    width: 160,
    renderCell: (params) => <Box className="authorCol5">{params.row.edit}</Box>,
  },
];

const rows = [
  {
    id: 1,
    function: (
      <Box>
        <Typography className="position">Manager</Typography>
        <Typography className="department">Organization</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/elaine.png" />
        <Box>
          <Typography className="authorName">Elaine Benes</Typography>
          <Typography className="authorEmail">elaine@vandelay.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus">
        <Typography>Online</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
  {
    id: 2,
    function: (
      <Box>
        <Typography className="position">Programmer</Typography>
        <Typography className="department">Developer</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/sidra.png" />
        <Box>
          <Typography className="authorName">Sidra Holland</Typography>
          <Typography className="authorEmail">sidra@vandelay.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus" backgroundColor={"#CBD5E0"}>
        <Typography>Offline</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
  {
    id: 3,
    function: (
      <Box>
        <Typography className="position">Executive</Typography>
        <Typography className="department">Projects</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/cosmo.png" />
        <Box>
          <Typography className="authorName">Cosmo Kramer</Typography>
          <Typography className="authorEmail">kramer@vandelay.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus">
        <Typography>Online</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
  {
    id: 4,
    function: (
      <Box>
        <Typography className="position">Manager</Typography>
        <Typography className="department">Organization</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/newman.png" />
        <Box>
          <Typography className="authorName">Newman</Typography>
          <Typography className="authorEmail">newman@usps.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus">
        <Typography>Online</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
  {
    id: 5,
    function: (
      <Box>
        <Typography className="position">Programmer</Typography>
        <Typography className="department">Developer</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/frank.png" />
        <Box>
          <Typography className="authorName">Frank Costanza</Typography>
          <Typography className="authorEmail">frank@vandelay.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus" backgroundColor={"#CBD5E0"}>
        <Typography>Offline</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
  {
    id: 6,
    function: (
      <Box>
        <Typography className="position">Designer</Typography>
        <Typography className="department">UI/UX Design</Typography>
      </Box>
    ),
    author: (
      <Box className="authorsContainer">
        <img src="./author/art.png" />
        <Box>
          <Typography className="authorName">Art VanDelay</Typography>
          <Typography className="authorEmail">art.ie@vandelay.com</Typography>
        </Box>
      </Box>
    ),
    status: (
      <Box className="authorStatus" backgroundColor={"#CBD5E0"}>
        <Typography>Offline</Typography>
      </Box>
    ),
    employed: (
      <Box className="employedDated">
        <Typography>14/06/21</Typography>
      </Box>
    ),
    edit: <Link className="edit">Edit</Link>,
  },
];

const AuthorsTable = () => {
  return (
    <Box>
      <Box paddingBottom={"30px"}>
        <Typography color={"#2D3748"} fontSize={"18px"} fontWeight={"700"}>
          Authors Table
        </Typography>
      </Box>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rowHeight={72}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[6]}
          hideFooter
          disableColumnMenu
          disableColumnSelector
          disableDensitySelector
          disableSelectionOnClick
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default AuthorsTable;
