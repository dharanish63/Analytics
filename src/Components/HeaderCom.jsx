import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../axiosServices";
import MenuCom from "./components/MenuCom";
import { Box, Tab, Tabs } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useTabs from "../stores/Tabs";
const HeaderCom = () => {
  const [insightEl, setInsightEl] = useState(null);
  const [domainEl, setDomainEl] = useState(null);
  const [domainDetails, setDomainDetails] = useState([]);
  const [tabValue, setTabValue] = useState("Domain");
  const values = useTabs((state) => state.values);
  const setValues = useTabs((state) => state.setValues);
  const Navigate = useNavigate();
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
  console.log(values);

  const handleChange = (e, Newvalue) => {
    setValues(Newvalue);
    console.log("TabValue", Newvalue, setValues);
  };
  const handleOverview = () => {
    Navigate("/home");
  };
  const handleSettings = (e) => {
    Navigate("/home/settings");
  };
  const handleMenuOpen = (event) => {
    console.log("enters", event.currentTarget);
    setInsightEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setInsightEl(null);
  };
  const handleDomainMenuopen = (event) => {
    setDomainEl(event.currentTarget);
  };
  const handleDomainMenuClose = () => {
    setDomainEl(null);
  };
  const handleMenuItems = async (domain) => {
    console.log(domain._id);
    setDomainEl(null);
    setTabValue(domain.domain_url);
    localStorage.setItem("id", domain._id);
    const res = await axiosGet(`/api/v1/record/avg-track/${domain._id}`);
    console.log(res);
    Navigate("/home", { state: { data: res.data } });
  };
  const insightmenuItems = [
    { label: "Views", onClick: () => Navigate("/insights/views") },
    { label: "Pages", onClick: () => Navigate("/insights/pages") },
    { label: "Referrers", onClick: () => Navigate("/insights/referrers") },
    { label: "Durations", onClick: () => Navigate("/insights/durations") },
    { label: "Events", onClick: () => Navigate("/insights/events") },
    { label: "Systems", onClick: () => Navigate("/insights/systems") },
    { label: "Sizes", onClick: () => Navigate("/insights/sizes") },
    { label: "Devices", onClick: () => Navigate("/insights/devices") },
    { label: "Languages", onClick: () => Navigate("/insights/languages") },
  ];
  console.log("domain", domainDetails);
  const domainmenuItems =
    domainDetails?.length > 0 &&
    domainDetails?.map((domain, index) => ({
      label: domain.domain_url,
      onClick: () => handleMenuItems(domain),
    }));
  console.log("hbgjhk", values);
  return (
    <Box
      sx={{
        top: 0,
        position: "fixed",
        width: "100vw",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Tabs
        values={values}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#1976d2",
            height: "10px",
          },
        }}
      >
        <Tab label="Overview" values={"0"} onClick={handleOverview} />
        <Tab label={tabValue} values={"1"} onClick={handleDomainMenuopen} />
        <Tab label="Insights" values={"2"} onClick={handleMenuOpen} />
        <Tab label="Settings" values={"3"} onClick={handleSettings} />
      </Tabs>
      {/* <TabContext values={values}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ovwrview" values="1" />
            <Tab label="Item Two" values="2" />
            <Tab label="Item Three" values="3" />
          </TabList>
        </Box>
        <TabPanel values="1" element={<Home />} />
        <TabPanel values="2">Item Two</TabPanel>
        <TabPanel values="3">Item Three</TabPanel>
      </TabContext> */}
      <MenuCom
        anchorEl={insightEl}
        open={Boolean(insightEl)}
        onClose={handleMenuClose}
        menuItems={insightmenuItems}
      />

      <MenuCom
        anchorEl={domainEl}
        open={Boolean(domainEl)}
        onClose={handleDomainMenuClose}
        menuItems={domainmenuItems}
      />
    </Box>
  );
};

export default HeaderCom;
