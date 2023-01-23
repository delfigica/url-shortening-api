import { createTheme } from "@mui/material";

const colors = {
  Cyan: "hsl(180, 66%, 49%)",
  DarkViolet: "hsl(257, 27%, 26%)",
  Gray: "hsl(0, 0%, 75%)",
  GrayishViolet: "hsl(257, 7%, 63%)",
  VeryDarkBlue: "hsl(255, 11%, 22%)",
  VeryDarkViolet: "hsl(260, 8%, 14%)",
};

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: colors.Cyan,
    },
    secondary: {
      main: colors.DarkViolet,
    },
  },
});
