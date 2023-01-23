import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
export const NavBar = () => {
  const links = ["Features", "Pricing", "Resources"];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2em 4em",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100px", margin: "0px 20px" }}>
          <img src={logo} alt="Shortly" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "250px",
          }}
        >
          {links.map((link) => (
            <Typography
              key={link}
              sx={{
                color: "hsl(257, 7%, 63%)",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            color: "hsl(257, 7%, 63%)",
            fontWeight: 500,
            margin: "0px 20px",
            cursor: "pointer",
          }}
        >
          Login
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "5px 20px",
            borderRadius: "30px",
            color: "white",
            fontWeight: 500,
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
