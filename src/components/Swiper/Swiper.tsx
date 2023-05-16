import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import LapTop from "../../assets/images/laptop.jpg";
import Arrow from "../../assets/images/arrow.svg";
import styles from "./Swiper.style";

const Swiper = ({ children, size, width, height }) => {
  const [Index, setIndex] = useState(0);

  return (
    <Grid container justify="center">
      <Grid item xs={10} sx={styles.swiperContainer}>
        <Box sx={styles.swiperContent}>
          <Box
            style={{
              flexGrow: 1,
              transition: "transform 0.3s ease-in-out",
              height,
              width,
              transform: `translateX(-${Index * 100}%)`,
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10} container justify="center">
        <Button onClick={() => Index > 0 && setIndex((i) => i - 1)}>
          Previous
        </Button>
        <Button onClick={() => setIndex((i) => i + 1)}>
          <Box component="img" src={Arrow} />
        </Button>
      </Grid>
    </Grid>
  );
};
export default Swiper;
