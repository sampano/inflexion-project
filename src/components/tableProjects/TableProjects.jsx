import "./tableProjects.scss";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  {
    field: "companies",
    headerName: "COMPANIES",
    width: 500,
    renderCell: (params) => <Box className="col1">{params.row.companies}</Box>,
  },

  {
    field: "members",
    headerName: "MEMBERS",
    width: 300,
    renderCell: (params) => <Box className="col2">{params.row.members}</Box>,
  },
  {
    field: "budget",
    headerName: "BUDGET",
    type: "number",
    width: 300,
    renderCell: (params) => <Box className="col3">{params.row.budget}</Box>,
  },
  {
    field: "completion",
    headerName: "COMPLETION",
    width: 200,
    renderCell: (params) => <Box className="col4">{params.row.completion}</Box>,
  },
  {
    field: "edit",
    headerName: "",
    width: 160,
    renderCell: (params) => <Box className="col4">{params.row.edit}</Box>,
  },
];

const rows = [
  {
    id: 1,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar3.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar4.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar5.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img src="./members/icon01.png" alt="avatar" />
        <Typography>Chakra Soft UI Version</Typography>
      </Box>
    ),
    budget: <Typography className="budget">$14,000</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          60%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"60%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
  {
    id: 2,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img src="./members/icon02.png" alt="avatar" />
        <Typography>Add Progress Track</Typography>
      </Box>
    ),
    budget: <Typography className="budget">$3,000</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          10%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"10%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
  {
    id: 3,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img src="./members/icon03.png" alt="avatar" />
        <Typography>Fix Platform Errors</Typography>
      </Box>
    ),
    budget: <Typography className="budget">Not set</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          100%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"100%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
  {
    id: 4,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar3.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar4.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img src="./members/icon04.png" alt="avatar" />
        <Typography>Launch our Mobile App</Typography>
      </Box>
    ),
    budget: <Typography className="budget">$32,000</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          100%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"100%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
  {
    id: 5,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar3.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar4.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img src="./members/icon05.png" alt="avatar" />
        <Typography>Add the New Pricing Page</Typography>
      </Box>
    ),
    budget: <Typography className="budget">$400</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          25%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"25%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
  {
    id: 6,
    members: (
      <Box className="dataGridRows">
        <img
          src="./members/Avatar1.png
        "
          alt="avatar"
        />
        <img
          src="./members/Avatar2.png
        "
          alt="avatar"
        />
      </Box>
    ),
    companies: (
      <Box>
        <img
          src="./members/icon06.png
        "
          alt="avatar"
        />
        <Typography>Redesign New Online Shop</Typography>
      </Box>
    ),
    budget: <Typography className="budget">$7,600</Typography>,
    completion: (
      <Box>
        <Typography color={"#4FD1C5"} fontSize={"14px"} fontWeight={"700"}>
          40%
        </Typography>
        <Box width={"100%"} height={"3px"} backgroundColor={"#A0AEC0"}>
          <Box width={"40%"} height={"3px"} backgroundColor={"#4FD1C5"}></Box>
        </Box>
      </Box>
    ),
    edit: (
      <Button>
        <MoreVertIcon sx={{ color: "#A0AEC0" }} />
      </Button>
    ),
  },
];

const TableProjects = () => {
  return (
    <Box>
      <Box paddingBottom={"30px"}>
        <Typography color={"#2D3748"} fontSize={"18px"} fontWeight={"700"}>
          Projects
        </Typography>
        <Typography fontSize={"14px"}>
          <span style={{ color: "#48BB78", fontWeight: "700" }}>(+23)</span> 30
          done this month
        </Typography>
      </Box>
      <Box
        sx={{ height: "100%", width: "100%", border: "none !important" }}
        className="test"
      >
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

export default TableProjects;
