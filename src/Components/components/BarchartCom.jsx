import React from "react";
import { Card, Typography, Box } from "@mui/material";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const BarChartCom = ({ title, data, key1, key2 }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: "16px",
          left: "26px",
          marginBottom: "10px",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "4px",
          marginTop: "40px",
        }}
      >
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={key1} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={key2} fill="#8884d8" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default BarChartCom;
