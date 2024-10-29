import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
const BroweserCom = () => {
  const [browser, setBrowser] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["browserdata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/browser-detials/${localStorage.getItem("id")}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setBrowser(data);
    },
  });
  console.log("Browser", browser);
  return (
    <Box>
      <BoxCom title="Browsers">
        {Array.isArray(browser) && browser.length > 0 ? (
          browser.map((item, index) => (
            <Box key={index}>
              <Typography variant="h6">{item.Browser}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No Data Available </Typography>
        )}
      </BoxCom>
    </Box>
  );
};

export default BroweserCom;
