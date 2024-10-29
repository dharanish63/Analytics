import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import GridCom from "../Components/components/GridCom";
import { axiosGet } from "../axiosServices";
import Viewscom from "./Viewscom";
import { useQuery } from "@tanstack/react-query";
import PageCom from "./PageCom";
import ReferrerCom from "./ReferrerCom";
import SystemsCom from "./SystemsCom";
import Devicescom from "./Devicescom";
import BroweserCom from "./BroweserCom";
import SizesCom from "./SizesCom";
import LanguagesCom from "./LanguagesCom";
import DurationCom from "./DurationCom";
const Maincom = () => {
  const [details, setDetails] = useState();
  const { data, isLoading, isError } = useQuery(
    {
      queryKey: ["records"],
      queryFn: async () => {
        try {
          const response = await axiosGet(
            `/api/v1/record/avg-track/${localStorage.getItem("id")}`
          );
          console.log("refetched");
          return response.data;
        } catch (error) {
          console.error("Error fetching data:", error.message);
          throw error;
        }
      },
      onSuccess: (data) => {
        setDetails(data);
      },
    },
    {
      refetchInterval: 5000,
    }
  );
  // console.log("url", process.env.REACT_APP_DEV_BASE_URL);
  return (
    <Box
      sx={{
        marginTop: "25vh",
        width: "100%",
        height: "100vh",
        overflowX: "none",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <GridCom
            title="Active Visitors"
            value={details?.activeUsers || 0}
            label="Visitors"
            variant="h5"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: "20px" }}>
          <GridCom
            title="Average Views"
            value={details?.averageViewsPerDay || 0}
            label="per day"
            variant="h5"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <GridCom
            title="Average Duration"
            value={details?.averageTimeSpent || 0}
            label="S"
            variant="h5"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <GridCom
            title="Views Today"
            value={details?.totalVisitsToday || 0}
            label="Views"
            variant="h5"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <GridCom
            title="New Users"
            value={details?.newUserCount || 0}
            label="Views"
            variant="h5"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <GridCom
            title="Average visitors"
            value={details?.averageVisitsPerDay || 0}
            label="Views"
            variant="h5"
          />
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "20px" }}>
        <Viewscom />
      </Grid>
      <Grid sx={{ marginTop: "20px" }}>
        <DurationCom />
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          padding: "20px",
        }}
      >
        <PageCom />
        <ReferrerCom />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          padding: "20px",
        }}
      >
        <SystemsCom />
        <Devicescom />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          gap: "50px",
        }}
      >
        <BroweserCom title="Browsers" />
        <SizesCom title="Sizes" />
      </Box>
      <Box>
        <LanguagesCom title="Languages" />
      </Box>
    </Box>
  );
};

export default Maincom;
