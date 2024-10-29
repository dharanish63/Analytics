import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import MenuCom from "../Components/components/MenuCom"; // Assuming you have MenuCom component

function CustomTabs({ tabValue, insightmenuItems, domainmenuItems }) {
  const [value, setValue] = useState(0);
  const [insightEl, setInsightEl] = useState(null);
  const [domainEl, setDomainEl] = useState(null);

  const handleChange = (event, newValue) => setValue(newValue);

  const handleMenuOpen = (event) => setInsightEl(event.currentTarget);
  const handleMenuClose = () => setInsightEl(null);

  const handleDomainMenuOpen = (event) => setDomainEl(event.currentTarget);
  const handleDomainMenuClose = () => setDomainEl(null);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { backgroundColor: "#1976d2", height: "4px" },
        }}
      >
        <Tab label="Overview" value={0} />
        <Tab label={tabValue} value={1} onClick={handleDomainMenuOpen} />
        <Tab label="Insights" value={2} onClick={handleMenuOpen} />
        <Tab label="Settings" value={3} />
      </Tabs>

      {/* Render Tab Panels Conditionally */}
      {value === 0 && <Box p={3}>Overview Content</Box>}
      {value === 1 && <Box p={3}>Domain Menu Content</Box>}
      {value === 2 && <Box p={3}>Insights Content</Box>}
      {value === 3 && <Box p={3}>Settings Content</Box>}

      {/* Menu Components */}
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
}

export default CustomTabs;
