import {
  Box,
  CardContent,
  CardActions,
  Card,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../axiosServices";
import Eventdata from "./Eventdata";
const EventCom = () => {
  const [eventDetails, setEventDetails] = useState();
  const { data, isLoading, isError } = useQuery(
    {
      queryKey: ["eventdata"],
      queryFn: async () => {
        try {
          const response = await axiosGet("/api/v1/event/events");
          console.log("event", response.data);
          return response.data;
        } catch (error) {
          console.error("Error fetching data:", error.message);
          throw error;
        }
      },
      onSuccess: (data) => {
        setEventDetails(data);
      },
    },
    {
      refetchInterval: 500,
    }
  );
  const handleEventClick = (event) => {
    console.log("Selected Event:", event);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        padding: 2,
        justifyContent: "center",
      }}
    >
      {eventDetails?.map((event) => (
        <Card
          key={event.id}
          sx={{
            minWidth: 250,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          spacing={2}
          sm={2}
          md={2}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {event.eventTitle}
            </Typography>
            <List dense>
              {event.actions?.map((action, index) => (
                <ListItem key={index}>
                  <ListItemText primary={action} />
                </ListItem>
              ))}
            </List>
          </CardContent>
          {/* <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" onClick={() => handleEventClick(event)}>
              View Details
            </Button>
          </CardActions> */}
        </Card>
      ))}
      <Box>
        <Eventdata />
      </Box>
    </Box>
  );
};

export default EventCom;
