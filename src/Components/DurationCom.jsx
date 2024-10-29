import React, { useState } from "react";
import BarChartCom from "./components/BarchartCom";
import { Box } from "@mui/material";
import { axiosGet } from "../axiosServices";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
const DurationCom = () => {
  const [duration, setDuration] = useState();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["duration"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/time-spent-per-day/${localStorage.getItem("id")}`
        );
        console.log(response.data);
        if (Array.isArray(response.data)) {
          const formattedData = response.data.map((item) => ({
            date: formatDistanceToNow(new Date(item.visitDate), {
              addSuffix: true,
            }),
            duration: item.timeSpent,
          }));
          console.log("hvkil", formattedData);
          return formattedData;
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setDuration(data);
    },
  });
  return (
    <Box>
      <BarChartCom
        title="Duration"
        key1="date"
        key2="duration"
        data={duration}
      />
    </Box>
  );
};

export default DurationCom;
