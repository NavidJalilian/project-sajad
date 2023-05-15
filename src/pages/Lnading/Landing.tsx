import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import styles from "./Landing.style";
import HeroImg from "../../assets/images/heroImage.svg";

export default function Landing() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={styles.tab}
        >
          <Tab sx={styles.tab} label="Item One" {...a11yProps(0)} />

          <Tab sx={styles.tab} label="Item Two" {...a11yProps(1)} />

          <Tab sx={styles.tab} label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          zIndex: -1,
        }}
      >
        <img src={HeroImg} alt="hero img" />
      </Box>
    </Box>
  );
}
