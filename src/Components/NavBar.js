import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../assets/logo.svg";
import { MenuDrawer } from "./MenuDrawer";
export const NavBar = () => {
  const links = ["Features", "Pricing", "Resources"];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2em 4em",
            }
          : {
              padding: "1em",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }
      }
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={ laptop ? { width: "100px", margin: "0px 20px" } : { width: "100px", margin: "0px 10px" }}>
          <img src={logo} alt="Shortly" />
        </Box>
        {laptop && (
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
        )}
      </Box>
      {laptop && (
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
      )}

      {!laptop && <MenuDrawer />}
    </Box>
  );
};
