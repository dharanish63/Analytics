import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
const ReferrerCom = () => {
  const [referrer, setReferrer] = useState();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["referrerdata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/referrer-page/${localStorage.getItem("id")}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setReferrer(data);
    },
  });
  console.log("hghj", referrer);
  return (
    <Box>
      <BoxCom title="Referrer">
        {referrer?.visited && referrer?.visited.length > 0 ? (
          referrer.visited.map((item, index) => (
            <Box key={index} sx={{ marginBottom: "8px" }}>
              <Typography variant="h6">{item.referrer}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No Referrer available</Typography>
        )}
      </BoxCom>
    </Box>
  );
};
//formatDistanceToNow(new Date(item.Date), { addSuffix: true })
export default ReferrerCom;
