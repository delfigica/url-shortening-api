import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import desktop from "../assets/bg-shorten-desktop.svg";
import mobile from "../assets/bg-shorten-mobile.svg";
import axios from "axios";

export const Search = () => {
  const [searchs, setSearchs] = useState();

  useEffect(() => {
    setSearchs(JSON.parse(sessionStorage.getItem("searchs")));
  }, [sessionStorage.getItem("searchs")]);

  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim().length == 0) {
      setError(true);
    } else {
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
    }

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

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? { height: "60vh", backgroundColor: "#F1F1F1", marginTop: "50px" }
          : { minHeight: "85vh", backgroundColor: "#F1F1F1", marginTop: "50px" }
      }
    >
      <Box
        sx={
          laptop
            ? {
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
              }
            : {
                backgroundColor: "hsl(257, 27%, 26%)",
                backgroundImage: `url(${mobile})`,
                backgroundRepeat: "no-repeat",
                width: "90vw",
                height: "130px",
                position: "relative",
                top: "-60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "10px",
                margin: "10px auto",
                backgroundSize: "200px",
              }
        }
      >
        <TextField
          type="text"
          sx={
            laptop
              ? {
                  width: "600px",
                  margin: "0px 30px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }
              : {
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0px",
                }
          }
          size="small"
          placeholder="Shorten a link here..."
          value={url}
          onChange={handleChange}
          error={error}
        />
        <Button
          variant="contained"
          sx={
            laptop
              ? { color: "white", fontWeight: 500 }
              : { color: "white", fontWeight: 500, width: "90%" }
          }
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
              sx={
                laptop
                  ? {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "70vw",
                      padding: "10px 15px",
                      margin: "5px 0px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }
                  : {
                      display: "flex",
                      //   alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      margin: "10px",
                      padding: "1em",
                      width: '90%'
                    }
              }
            >
              <Typography sx={laptop ? {} : { margin: "10px 0px" }}>
                {search.search}
              </Typography>
              {!laptop && <hr />}
              <Box sx={laptop ? { display: "flex", alignItems: "center" } : {}}>
                <Typography
                  color="primary"
                  sx={laptop ? { margin: "0px 20px" } : { margin: "10px 0px" }}
                >
                  {search.link}
                </Typography>
                <Button
                  variant="contained"
                  color={search.copied ? "secondary" : "primary"}
                  sx={
                    laptop
                      ? { width: "100px", color: "white" }
                      : { width: "100%", color: "white" }
                  }
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
