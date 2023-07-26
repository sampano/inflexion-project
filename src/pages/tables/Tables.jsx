import AuthorsTable from "../../components/authorsTable/AuthorsTable";
import Projects from "../../components/projects/Projects";
import TableProjects from "../../components/tableProjects/TableProjects";
import "./tables.scss";
import { Box } from "@mui/material";

const Tables = () => {
  return (
    <Box className="tables">
      <Box className="box box1">
        <AuthorsTable />
      </Box>
      <Box className="box box2">
        <TableProjects />
      </Box>
    </Box>
  );
};

export default Tables;
