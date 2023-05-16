import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import LapTop from "../../assets/images/laptop.jpg";
import RightArrowIcon from "../../assets/images/rightArrow.svg";
import styles from "./Banner.style";

export default function banner() {
  return (
    <Box sx={styles.root}>
      <Box src={LapTop} height={300} component="img" />
      <Stack direction="row" sx={styles.container}>
        <Typography sx={styles.title}>Have an Awesome Project?</Typography>
        <Button variant="outlined" sx={styles.button}>
          <Stack
            direction="row"
            justifyContent="space-around"
            width="100%"
            alignItems="center"
            py={0.5}
          >
            <Typography sx={styles.buttonTitle}>Explore More </Typography>
            <Box
              ml={2.5}
              width={22}
              height={20}
              sx={{ transform: "scale(1.5)" }}
            >
              <img src={RightArrowIcon} />
            </Box>
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
}
