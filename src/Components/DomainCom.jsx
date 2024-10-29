import React, { useState } from "react";
import { axiosDelete, axiosGet, axiosPost } from "../axiosServices";
import { useQuery } from "@tanstack/react-query";
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
} from "@mui/material";

const DomainComponent = () => {
  const [open, setOpen] = useState(false);
  const [domainDetailsOpen, setDomainDetailsOpen] = useState(false);
  const [domainDetails, setDomainDetails] = useState([]);
  const [domains, setDomains] = useState([]);
  const [newDomain, setNewDomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [domainopen, setDomainOpen] = useState(false);
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
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDomainDetailsClose = () => {
    setDomainDetailsOpen(false);
  };
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard");
      alert("Text copied!");
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log("selectedDetails", selectedDomain);
  return (
    <Box sx={{ padding: "10px" }}>
      <Card variant="outlined" sx={{ borderRadius: "10px", padding: "2vh" }}>
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
          {domainDetails.map((domain, index) => (
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
          ))}
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
        <Dialog open={open} onClose={handleClose} fullWidth>
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
  );
};

export default DomainComponent;
