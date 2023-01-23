import React from "react";
import { Box, Button, Typography } from "@mui/material";
import desktop from "../assets/bg-boost-desktop.svg";
import logo from "../assets/logo-white.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const links = [
    {
      title: "Feactures",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  const sociales = [
    <FacebookIcon
      key="facebook"
      sx={{
        fontSize: "2em",
        margin: "0px 10px",
        "&:hover": {
          color: "hsl(180, 66%, 49%)",
          cursor: "pointer",
        },
      }}
    />,
    <TwitterIcon
      key="twitter"
      sx={{
        fontSize: "2em",
        margin: "0px 10px",
        "&:hover": {
          color: "hsl(180, 66%, 49%)",
          cursor: "pointer",
        },
      }}
    />,
    <PinterestIcon
      key="pinterest"
      sx={{
        fontSize: "2em",
        margin: "0px 10px",
        "&:hover": {
          color: "hsl(180, 66%, 49%)",
          cursor: "pointer",
        },
      }}
    />,
    <InstagramIcon
      key="instagram"
      sx={{
        fontSize: "2em",
        margin: "0px 10px",
        "&:hover": {
          color: "hsl(180, 66%, 49%)",
          cursor: "pointer",
        },
      }}
    />,
  ];

  return (
    <Box>
      <Box
        sx={{
          height: "38vh",
          width: "100%",
          backgroundColor: "hsl(257, 27%, 26%)",
          backgroundImage: `url(${desktop})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "2.5em", fontWeight: 700, color: "white" }}>
          Boost your links today
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "10px 30px",
            borderRadius: "30px",
            color: "white",
            fontWeight: 500,
            margin: "10px 0px",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          height: "50vh",
          backgroundColor: "hsl(255, 11%, 22%)",
          color: "white",
          padding: "5em",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100px" }}>
          <img src={logo} />
        </Box>
        <Box sx={{ display: "flex", marginLeft: "130px" }}>
          {links.map((link) => (
            <Box key={link.title} sx={{ margin: "0px 25px" }}>
              <Typography sx={{ fontWeight: 700, marginBottom: "15px" }}>
                {link.title}
              </Typography>
              {link.links.map((link) => (
                <Typography
                  key={link}
                  sx={{
                    color: "hsl(257, 7%, 63%)",
                    margin: "5px 0px",
                    cursor: "pointer",
                    "&:hover": { color: "hsl(180, 66%, 49%)" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", margin: "0px 15px" }}>
          {sociales.map((social) => (
            <Box key={social} sx={{ width: "25px", margin: "0px 10px" }}>
              {social}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
