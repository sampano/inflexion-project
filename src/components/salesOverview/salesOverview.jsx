import { Box, Typography } from "@mui/material";
import "./salesOverview.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 180,
    pv: 600,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 220,
    pv: 300,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 210,
    pv: 200,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 350,
    pv: 280,
    amt: 2000,
  },
  {
    name: "May",
    uv: 340,
    pv: 200,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 460,
    pv: 100,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 340,
    pv: 180,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 300,
    pv: 200,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 360,
    pv: 250,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 210,
    pv: 240,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 390,
    pv: 222,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 410,
    pv: 110,
    amt: 2100,
  },
];
const SalesOVerview = () => {
  return (
    <Box>
      <Box paddingBottom={"40px"}>
        <Typography color={"#2D3748"} fontSize={"18px"} fontWeight={"700"}>
          Sales Overview
        </Typography>
        <Typography fontSize={"14px"}>
          <span style={{ color: "#48BB78", fontWeight: "700" }}>
            (+23) more
          </span>{" "}
          in 2021
        </Typography>
      </Box>
      <Box width={"100%"} height={"400px"}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4FD1C5"
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#2D3748"
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SalesOVerview;
