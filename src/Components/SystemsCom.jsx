import React, { useState } from "react";
import BoxCom from "./components/BoxCom";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
const SystemsCom = () => {
  const [systems, setSystems] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["systems"],
    queryFn: async () => {
      try {
        const response = await axiosGet(
          `/api/v1/record/system-type/${localStorage.getItem("id")}`
        );
        return response.data || [];
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setSystems(data);
    },
  });
  return (
    <Box>
      <BoxCom title="Systems">
        {Array.isArray(systems) && systems.length > 0 ? (
          systems.map((items) => (
            <Box
              key={items.count}
              sx={{
                marginBottom: "8px",
                display: "flex",
              }}
            >
              {/* <Typography
                variant="h6"
                sx={{
                  paddingRight: "50px",
                  backgroundColor: "#acace6",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "30%",
                }}
              >
                {items.count}
              </Typography> */}
              <Typography variant="h6" sx={{ padding: "10px" }}>
                {items.system !== null ? items.system : "Unknown System"}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No data Available</Typography>
        )}
      </BoxCom>
    </Box>
  );
};

export default SystemsCom;
