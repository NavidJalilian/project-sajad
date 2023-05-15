import { createTheme, PaletteColorOptions } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#333333",
      light: "#FFFF",
      dark: "#1E1E1E",
    },
    error: {
      light: "#ef233c",
      main: "#d90429",
    },
    grey: {
      "200": "#8d99ae",
      "100": "#edf2f4",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  // other custom theme properties here
});

const theme = createTheme({
  ...customTheme,
});

export default theme;
