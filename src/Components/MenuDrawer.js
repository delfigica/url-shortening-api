import React, { useState } from "react";
import { Box, Dialog, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

export const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const links = ["Features", "Pricing", "Resources"];
  return (
    <Box>
      <Box onClick={() => setOpenDrawer((prev) => !prev)}>
        <MenuIcon sx={{ color: 'hsl(0, 0%, 75%)', fontSize: '2em', margin: "0px 10px" }} />
      </Box>
      <Dialog open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            padding: "2em",
            width: "240px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: 'hsl(257, 27%, 26%)'
          }}
        >
          {links.map((link) => (
            <Typography
              key={link}
              sx={{
                color: "hsl(233, 26%, 24%)",
                fontWeight: 400,
                fontSize: "1.2em",
                textAlign: "center",
              }}
            >
              {link}
            </Typography>
          ))}

        </Box>
      </Dialog>
    </Box>
  );
};
