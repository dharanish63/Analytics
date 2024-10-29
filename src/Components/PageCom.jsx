import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
const PageCom = () => {
  const [pages, setPages] = useState(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pagesdata"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/visit-page/${localStorage.getItem("id")}`
        );
        console.log("pages", response.data);
        if (Array.isArray(response.data.visitedPages)) {
          const formattedData = response.data.visitedPages.map((item) => ({
            pages: item.page,
            date: item.visitDate,
          }));

          return formattedData;
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setPages(data);
    },
  });
  if (isLoading) <CircularProgress>Error fetching the data</CircularProgress>;
  if (isError) <Typography>Error fetching the data</Typography>;
  const currentDate = new Date();
  const recentPages = pages?.filter((item) => {
    const itemDate = new Date(item.date);
    const timeDiff = currentDate - itemDate;
    return timeDiff <= 24 * 60 * 60 * 1000;
  });

  console.log("Filtered recent pages", recentPages);

  return (
    <Box>
      <BoxCom title="Pages">
        {recentPages?.length > 0 ? (
          recentPages.map((page) => (
            <Box
              key={page.pages}
              sx={{
                marginBottom: "8px",
              }}
            >
              <Typography variant="h6">{page.pages}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="h6">
            No pages visited in the last 24 hours.
          </Typography>
        )}
      </BoxCom>
    </Box>
  );
};

export default PageCom;
