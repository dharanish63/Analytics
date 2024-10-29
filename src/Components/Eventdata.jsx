import { Box, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Eventdata = () => {
  const [age, setAge] = useState();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "45%",
        right: "40%",
        height: "50px",
        width: "18vw",
        backgroundColor: "white",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2vh",
        borderRadius: "25px",
      }}
    >
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"daily"}
          label="Age"
          // onChange={handleChange}
          sx={{
            height: "30px",
            borderRadius: "10px",
            width: "100px",
            backgroundColor: "",
            marginRight: "10px",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"top"}
          label="Age"
          // onChange={handleChange}
          sx={{
            height: "30px",
            borderRadius: "10px",
            width: "80px",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="top">Top</MenuItem>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="recent">Recent</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Eventdata;
