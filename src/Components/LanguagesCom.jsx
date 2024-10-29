import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { axiosGet } from "../axiosServices";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
const LanguagesCom = () => {
  const [languages, setLanguages] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["languagesdata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/get-language/${localStorage.getItem("id")}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setLanguages(data);
    },
  });
  console.log("languages", languages);
  return (
    <Box>
      <BoxCom title="Languages">
        {Array.isArray(languages) && languages ? (
          languages?.map((item, index) => (
            <Box key={index}>
              <Typography variant="h6">
                {item.language === null ? "Unknown" : item.language}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No Data Available</Typography>
        )}
      </BoxCom>
    </Box>
  );
};

export default LanguagesCom;
