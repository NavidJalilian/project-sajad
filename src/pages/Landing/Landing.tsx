import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import styles from "./Landing.style";
import HeroImg from "../../assets/images/hero.png";
import RightArrowIcon from "../../assets/images/rightArrow.svg";
import Info from "../../components/Info";

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

      <Box>
        <img src={HeroImg} alt="hero img" />
      </Box>
      <Stack
        direction="column"
        sx={{
          position: "absolute",
          top: 3,
          right: -358,
          transform: "translate(-50%, 50%)",
          zIndex: 3,
          justifyContent: "start",
        }}
      >
        <Typography sx={styles.name} component="h1">
          Jacob Bowman
        </Typography>
        <Typography sx={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus
          quam, facilisis id semper faucibus,
        </Typography>
        <Button sx={styles.button} variant="contained">
          <Stack
            direction="row"
            justifyContent="space-around"
            width="100%"
            alignItems="center"
            py={0.5}
          >
            <Typography>Work with me</Typography>
            <Box>
              <img src={RightArrowIcon} width={22} height={20} />
            </Box>
          </Stack>
        </Button>
      </Stack>
      <Info />
    </Box>
  );
}
