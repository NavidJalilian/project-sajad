import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import styles from "./Services.style";
import InfoRightImg from "../../assets/images/info-right.jpg";
import InfoMiddleImg from "../../assets/images/info-middle.jpg";
import InfoLeftImg from "../../assets/images/info-left.jpg";
import RightArrowIcon from "../../assets/images/rightArrow.svg";
import Swiper from "../Swiper";
import Banner from "../Banner";

const images = [
  [InfoLeftImg, InfoMiddleImg, InfoRightImg],
  [InfoLeftImg, InfoMiddleImg, InfoRightImg],
];

export default function Services() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Typography variant="h2" sx={styles.slogan} className="container">
          Our job, <span className="textRed">your spotlight.</span>
        </Typography>

        <Banner />

        <Box sx={styles.content} className="container">
          <Swiper size={images.length} width={500} height={860}>
            <Stack direction="row" width={500}>
              {images.map((row) => (
                <Box sx={styles.slides}>
                  {row.map((image) => (
                    <Box
                      component="img"
                      sx={{ flexGrow: 1, flexShrink: 0 }}
                      src={image}
                      alt="Info Left Img"
                      key={image}
                      width={500}
                      height={286}
                    />
                  ))}
                </Box>
              ))}
            </Stack>
          </Swiper>

          <Box>
            <Typography variant="h1" sx={styles.mainTitle}>
              Our
            </Typography>
            <Typography variant="h1" sx={styles.mainTitle} className="redText">
              Services
            </Typography>
            <Typography variant="body2" sx={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Button sx={styles.button} variant="contained">
              <Stack
                direction="row"
                justifyContent="space-around"
                width="100%"
                alignItems="center"
                py={0.5}
              >
                <Typography>Explore More</Typography>
                <Box>
                  <img src={RightArrowIcon} width={22} height={20} />
                </Box>
              </Stack>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
