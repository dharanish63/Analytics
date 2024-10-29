import React from "react";
import { Menu, MenuItem } from "@mui/material";
const MenuCom = ({ anchorEl, open, onClose, menuItems }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {menuItems?.length > 0 &&
        menuItems?.map((items, index) => (
          <MenuItem key={index} onClick={items.onClick || onClose}>
            {items.label}
          </MenuItem>
        ))}
    </Menu>
  );
};

export default MenuCom;
