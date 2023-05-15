import { Box, Stepper, Tab, Tabs } from "@mui/material";
import React from "react";
import Form from "../../components/Form";
import Steps from "../../components/Steps";
import styles from "./Landing.style";
import HeroImg from "../../assets/images/hero.png";

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
          position: "absolute",
          inset: 0,
          width: "100%",
          zIndex: 1,
          marginInlineStart: 2.75,
          marginBlockStart: 1.5,
        }}
      >
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={styles.root}
        >
          <Tab sx={styles.tab} label="about us" {...a11yProps(0)} />

          <Tab sx={styles.tab} label="services" {...a11yProps(1)} />

          <Tab sx={styles.tab} label="case studies" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Box sx={{ maxWidth: " width: 100%" }}>
        <img src={HeroImg} alt="hero img" />
      </Box>
    </Box>
  );
}
