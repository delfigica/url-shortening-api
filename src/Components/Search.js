import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import desktop from "../assets/bg-shorten-desktop.svg";
import axios from "axios";

export const Search = () => {
  //   const searchs = [
  //     {
  //       id: 0,
  //       search: "https://www.frontendmentor.io",
  //       link: "https://rel.ink/k4lKyk",
  //       copied: false,
  //     },
  //     {
  //       id: 1,
  //       search: "https://www.twitter.com/frontendmentor",
  //       link: "https://rel.ink/gxOXp9",
  //       copied: true,
  //     },
  //     {
  //       id: 2,
  //       search: "https://www.linkedin.com/frontendmentor",
  //       link: "https://rel.ink/gob3X9",
  //       copied: false,
  //     },
  //   ];

  const [searchs, setSearchs] = useState();

  useEffect(() => {
    setSearchs(JSON.parse(sessionStorage.getItem("searchs")));
  }, [sessionStorage.getItem("searchs")]);

  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  console.log(searchs);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => {
        console.log(res.data);
        let prevStorage = sessionStorage.getItem("searchs");
        let dataUrl = {
          link: res.data.result.full_short_link,
          search: res.data.result.original_link,
          copied: false,
          id: res.data.result.code,
        };
        if (prevStorage == null) {
          let arr = [];
          arr.push(dataUrl);
          sessionStorage.setItem("searchs", JSON.stringify(arr));
        } else {
          let arr = JSON.parse(prevStorage);
          arr.push(dataUrl);
          sessionStorage.setItem("searchs", JSON.stringify(arr));
        }
      })
      .catch((err) => console.log(err));
    setUrl("");
  };

  const clipBoard = (link, index) => {
    navigator.clipboard.writeText(link);
    setSearchs([
      ...searchs.slice(0, index),
      { ...searchs[index], copied: true },
      ...searchs.slice(index + 1),
    ]);
  };
  return (
    <Box sx={{ height: "60vh", backgroundColor: "#F1F1F1", marginTop: "50px" }}>
      <Box
        sx={{
          width: "70vw",
          height: "130px",
          backgroundColor: "hsl(257, 27%, 26%)",
          backgroundImage: `url(${desktop})`,
          backgroundRepeat: "no-repeat",
          margin: "10px auto",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: "-60px",
        }}
      >
        <TextField
          type="text"
          sx={{
            width: "600px",
            margin: "0px 30px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          size="small"
          placeholder="Shorten a link here..."
          value={url}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{ color: "white", fontWeight: 500 }}
          onClick={handleSubmit}
        >
          Shorten It!
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          top: "-50px",
        }}
      >
        {searchs ? (
          searchs.map((search, index) => (
            <Box
              key={search.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "70vw",
                padding: "10px 15px",
                backgroundColor: "white",
                margin: "5px 0px",
                borderRadius: "5px",
              }}
            >
              <Typography>{search.search}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography color="primary" sx={{ margin: "0px 20px" }}>
                  {search.link}
                </Typography>
                <Button
                  variant="contained"
                  color={search.copied ? "secondary" : "primary"}
                  sx={{ width: "100px", color: "white" }}
                  onClick={() => clipBoard(search.link, index)}
                >
                  {search.copied ? "copied!" : "copy"}
                </Button>
              </Box>
            </Box>
          ))
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};
