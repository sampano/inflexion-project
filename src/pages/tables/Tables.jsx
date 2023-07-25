import AuthorsTable from "../../components/authorsTable/AuthorsTable";
import "./tables.scss";
import { Box } from "@mui/material";

const Tables = () => {
  return (
    <Box className="tables">
      <Box className="box box1">
        <AuthorsTable />
      </Box>
      <Box className="box box2"></Box>
    </Box>
  );
};

export default Tables;
