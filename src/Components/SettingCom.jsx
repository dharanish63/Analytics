import React, { useEffect, useState } from "react";
import { axiosDelete, axiosGet, axiosPost } from "../axiosServices";
import { useQuery } from "@tanstack/react-query";
import useEvents from "../stores/Events";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
const SettingCom = () => {
  const [open, setOpen] = useState(false);
  const [domainDetailsOpen, setDomainDetailsOpen] = useState(false);
  const [domainDetails, setDomainDetails] = useState([]);
  const [domains, setDomains] = useState([]);
  const [newDomain, setNewDomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [eventDetailsOpen, setEventDetailsOpen] = useState(false);
  const [domainopen, setDomainOpen] = useState(false);
  const [eventType, setEventType] = useState("");
  const [eventDetails, setEventDetails] = useState([]);
  const events = useEvents((state) => state.events);
  const setEvents = useEvents((state) => state.setEvents);
  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  const handleClickOpen = () => {
    setDomainOpen(true);
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["domaindata"],
    queryFn: async () => {
      try {
        const response = await axiosGet("/api/v1/domain/get-domains");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setDomainDetails(data);
    },
  });
  const {
    data: event,
    isLoading: isEventLoading,
    isError: isEventError,
  } = useQuery(
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
  const handleClose = () => {
    setOpen(false);
  };

  const handleDomain = async () => {
    await axiosPost("/api/v1/domain/create-domain", {
      domain_url: newDomain,
    }).then((res) => {
      setDomains([...domains, newDomain]);
      setNewDomain("");
      setDomainOpen(false);
      console.log(domains);
      console.log(res.data);
    });
  };
  const handledomainClose = () => {
    setDomainOpen(false);
  };
  // Handle opening domain details popup
  const handleDomainClick = (domain) => {
    console.log(domain);
    setSelectedDomain(domain);
    setDomainDetailsOpen(true);
  };
  const handleDomainDelete = async (domainId) => {
    try {
      await axiosDelete(`api/v1/domain/delete-domain/${domainId}`).then(() => {
        setDomainDetailsOpen(false);
        setDomainDetails((prevDetails) =>
          prevDetails.filter((domain) => domain._id !== domainId)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDomainDetailsClose = () => {
    setDomainDetailsOpen(false);
  };
  const handleEvent = async () => {
    // if (newEvent) {
    //   setEvents([...events, newEvent]);
    //   setNewEvent("");
    //   setOpen(false);
    // }
    try {
      console.log("Et", newEvent);
      console.log("Ety", eventType);
      await axiosPost(`/api/v1/event/events/`, {
        eventTitle: newEvent,
        eventType,
      }).then((res) => {
        setEvents(res.data.newEvent);
        setNewEvent("");
        setEventType("");
        console.log(res.data);
        setOpen(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(events);
  const handleEventClick = (event) => {
    console.log("selected event", event);
    setSelectedEvent(event);
    setEventDetailsOpen(true);
  };
  const handleEventDetailsClose = () => setEventDetailsOpen(false);
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard");
      alert("Text copied!");
    });
  };
  const handleClickeventOpen = () => {
    setOpen(true);
  };
  const handleEventDelete = async (eventId) => {
    try {
      setEventDetailsOpen(false);
      await axiosDelete(`/api/v1/event/delete-event/${eventId}`).then(() => {
        setEventDetailsOpen(false);
        setEventDetails((prevDetails) =>
          prevDetails.filter((domain) => domain._id !== eventId)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {};
  console.log("selectedDetails", selectedDomain);
  return (
    <Box>
      <Box sx={{ padding: "10px" }}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <Typography
            fullwidth
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "2vh",
            }}
          >
            Account
          </Typography>
          <Divider />
          <Button
            sx={{
              marginTop: "10px",
              color: "black",
              backgroundColor: "transparent",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            variant="h6"
            onClick={handleLogout}
          >
            <Typography>Sign Out</Typography>
          </Button>
        </Card>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Card variant="outlined" sx={{ borderRadius: "10px", padding: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "20px",
            }}
          >
            Domains
          </Typography>

          {/* Display list of domains */}

          <List>
            {domainDetails.length > 0 ? (
              domainDetails.map((domain, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleDomainClick(domain)}
                  divider
                >
                  <ListItemText
                    primary={domain.domain_url}
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  />
                  <ListItemText
                    primary={domain.domainId}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  />
                </ListItem>
              ))
            ) : (
              <Divider />
            )}
          </List>
          {/* Button to open the "Add Domain" dialog */}
          <Button
            sx={{
              color: "black",
              ":hover": {
                backgroundColor: "white",
              },
            }}
            onClick={handleClickOpen}
          >
            <Typography sx={{ padding: "10px" }}>Add Domain</Typography>
          </Button>
          {/* Add Domain Dialog */}
          <Dialog open={domainopen} onClose={handleClose} fullWidth>
            <DialogTitle>Add a New Domain</DialogTitle>
            <DialogContent>
              <TextField
                sx={{ marginTop: "2vh" }}
                fullWidth
                label="Domain Name"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handledomainClose} color="primary">
                Close
              </Button>
              <Button onClick={handleDomain} color="primary">
                Add Domain
              </Button>
            </DialogActions>
          </Dialog>

          {/* Domain Details Dialog */}
          <Dialog
            open={domainDetailsOpen}
            onClose={handleDomainDetailsClose}
            fullWidth
          >
            <DialogTitle>Domain Details</DialogTitle>
            <DialogContent>
              <TextField
                defaultValue={selectedDomain.domain_url}
                fullWidth
                sx={{ marginBottom: "10px" }}
              />
              <TextField
                defaultValue={selectedDomain.domainId}
                onClick={() => handleCopyText(selectedDomain.domainId)}
                disabled
                fullWidth
                sx={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                disabled
                label="Embed Code"
                variant="outlined"
                sx={{ marginBottom: "2vh" }}
                defaultValue={`<script async src="http://localhost:3000/custom-tracker.js" data-tracker-server="http://localhost:3000" data-tracker-domain-id="${selectedDomain.domainId}"></script>`}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDomainDetailsClose} color="primary">
                Close
              </Button>
              <Button
                onClick={() => handleDomainDelete(selectedDomain._id)}
                sx={{ color: "red" }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Card variant="outlined" sx={{ borderRadius: "10px", padding: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "20px",
            }}
          >
            Events
          </Typography>

          {/* Display list of events */}
          <List>
            {Array.isArray(eventDetails) && eventDetails.length > 0 ? (
              eventDetails.map((event, index) => (
                <ListItem
                  key={index}
                  button
                  divider
                  onClick={() => handleEventClick(event)}
                >
                  <ListItemText
                    primary={event.eventTitle}
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  />
                  <ListItemText
                    primary={event.id}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  />
                </ListItem>
              ))
            ) : (
              <Divider />
            )}
          </List>
          {/* Button to open the "Add Event" dialog */}
          <Button
            sx={{
              color: "black",
              ":hover": {
                backgroundColor: "white",
              },
            }}
            onClick={handleClickeventOpen}
          >
            <Typography sx={{ padding: "10px" }}>Add Event</Typography>
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Add a New Event</DialogTitle>
            <DialogContent>
              <TextField
                sx={{ marginTop: "2vh", paddingBottom: "20px" }}
                fullWidth
                label="Event Name"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Event Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventType}
                  label="Event Type"
                  onChange={handleChange}
                >
                  <MenuItem value="click">Click</MenuItem>
                  <MenuItem value="hover">Hover</MenuItem>
                  <MenuItem value="submit">Submit</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button onClick={handleEvent} color="primary">
                Add Event
              </Button>
            </DialogActions>
          </Dialog>

          {/* Event Details Dialog */}
          <Dialog
            open={eventDetailsOpen}
            onClose={handleEventDetailsClose}
            fullWidth
          >
            <DialogTitle>Event Details</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                defaultValue={selectedEvent.eventTitle}
                sx={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                defaultValue={selectedEvent.id}
                disabled
                sx={{ marginBottom: "10px" }}
              />
              <TextField
                fullWidth
                defaultValue={`<script
  async
  src="http://localhost:3000/event-tracker.js"
  data-tracker-server="http://localhost:3000"
  data-tracker-event-id="${selectedEvent.id}"
></script>;`}
                disabled
                sx={{ marginBottom: "10px" }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEventDetailsClose} color="primary">
                Close
              </Button>
              <Button
                onClick={() => handleEventDelete(selectedEvent._id)}
                sx={{ color: "red" }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Box>
    </Box>
  );
};

export default SettingCom;
