import { createTheme, PaletteColorOptions } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      dark: "hsl(213, 96%, 18%)",
      main: "hsl(243, 100%, 62%)",
      light: "hsl(228, 100%, 84%)",
      contrastText: "hsl(206, 94%, 87%)",
    },
    error: {
      main: "hsl(354, 84%, 57%)",
    },
    grey: {
      "700": "hsl(231, 11%, 63%)",
      "500": "hsl(229, 24%, 87%)",
      "300": "hsl(217, 100%, 97%)",
      "200": "hsl(231, 100%, 99%)",
      "100": "hsl(0, 0%, 100%)",
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
