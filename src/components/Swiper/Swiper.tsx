import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import LapTop from "../../assets/images/laptop.jpg";
import Arrow from "../../assets/images/arrow.svg";
import styles from "./Swiper.style";
import Indicator from "../Indicator/Indicator";

const Swiper = ({ children, size, width }) => {
  const [Index, setIndex] = useState(0);
  const maxIndex = size - 1;

  const handlePrevClick = () => {
    if (Index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (Index < maxIndex) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <Grid container>
      <Grid item xs={10} sx={styles.swiperContainer}>
        <Box sx={styles.swiperContent}>
          <Box
            style={{
              flexGrow: 1,
              transition: "transform 0.3s ease-in-out",

              width,
              transform: `translateX(-${Index * 100}%)`,
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Indicator {...{ Index, setIndex }} />
          <Button onClick={handleNextClick} disabled={Index === maxIndex}>
            <Box sx={{}} component="img" src={Arrow} />
          </Button>
        </Stack>  
      </Grid>
    </Grid>
  );
};
export default Swiper;
