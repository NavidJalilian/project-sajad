import { Box, Button, Link, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import styles from "./Landing.style";
import HeroImg from "../../assets/images/hero.jpg";
import RightArrowIcon from "../../assets/images/rightArrow.svg";

const pagesId = ["about us"];

export default function Landing() {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          m: 1,
        }}
      >
        <Stack aria-label="navigation" direction="row" gap={2} sx={styles.root}>
          <Link sx={styles.tab} href="#about us" underline="hover">
            about us
          </Link>
          <Link sx={styles.tab} href="#case studies" underline="hover">
            case studies
          </Link>
          <Link sx={styles.tab} href="#services" underline="hover">
            services
          </Link>
        </Stack>
      </Box>

      <Box>
        <Box component="img" src={HeroImg} alt="hero img" />
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
    </Box>
  );
}
