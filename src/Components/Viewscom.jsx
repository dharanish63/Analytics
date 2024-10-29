import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
import BarChartCom from "./components/BarchartCom";
import { formatDistanceToNow } from "date-fns";
import { Box } from "@mui/material";
const Viewscom = () => {
  const [views, setViews] = useState();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["viewsdata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/views-per-day/${localStorage.getItem("id")}`
        );
        console.log(response.data);
        if (Array.isArray(response.data)) {
          const formattedData = response.data.map((item) => ({
            date: formatDistanceToNow(new Date(item.Date), { addSuffix: true }),
            views: item.totalViews,
          }));
          return formattedData;
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setViews(data);
    },
  });
  console.log("views", views);
  return (
    <Box>
      <BarChartCom title="Views" key1="date" key2="views" data={views} />
    </Box>
  );
};

export default Viewscom;
