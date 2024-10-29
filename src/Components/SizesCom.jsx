import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { Box, Typography } from "@mui/material";
import { axiosGet } from "../axiosServices";
import { useQuery } from "@tanstack/react-query";
const SizesCom = () => {
  const [size, setSizes] = useState();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bardata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/screen-size/${localStorage.getItem("id")}`
        );
        console.log("size", response.data);
        if (Array.isArray(response.data)) {
          const formattedData = response.data.map((item) => ({
            count: item.count,
            height: item.screenSize.height,
            width: item.screenSize.width,
          }));
          return formattedData;
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setSizes(data);
    },
  });
  console.log(size);
  return (
    <Box>
      <BoxCom title="Sizes">
        {size?.length ? (
          size.map((item) => (
            <Box key={item.count} sx={{ display: "flex" }}>
              {/* <Typography variant="h6" sx={{ gap: "20px" }}>
                {item.count}
              </Typography> */}
              <Typography variant="h6">{`${item.height} X ${item.width}`}</Typography>
            </Box>
          ))
        ) : (
          <Typography>Data not available</Typography>
        )}
      </BoxCom>
    </Box>
  );
};

export default SizesCom;
