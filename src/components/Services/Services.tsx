import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import styles from "./Services.style";
import InfoRightImg from "../../assets/images/info-right.jpg";
import InfoMiddleImg from "../../assets/images/info-middle.jpg";
import InfoLeftImg from "../../assets/images/info-left.jpg";
import RightArrowIcon from "../../assets/images/rightArrow.svg";
import RightArrowRedIcon from "../../assets/images/rightArrowRed.svg";
import BannerImg from "../../assets/images/banner.png";
import Swiper from "../Swiper";
import Indicator from "../Indicator/Indicator";
import Banner from "../Banner";

const images = [
  [
    { url: InfoLeftImg, label: "Commercials" },
    { url: InfoMiddleImg, label: "Consulting" },
    { url: InfoRightImg, label: "Company" },
  ],
  [
    { url: InfoLeftImg, label: "Personnel" },
    { url: InfoMiddleImg, label: "Services" },
    { url: InfoRightImg, label: "Organization" },
  ],
];

export default function Services() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Typography variant="h2" sx={styles.slogan} className="container">
          Our job, <span className="textRed">your spotlight.</span>
        </Typography>

        <Box mt={2} position="relative" width="100%">
          <Box src={BannerImg} height={300} component="img" />
          <Button sx={styles.bannerArrowBtn} variant="text">
            <img src={RightArrowRedIcon} width={39} height={36} />
          </Button>
        </Box>

        <Banner />

        <Box sx={styles.content} className="container">
          <Box>
            <Swiper size={images.length} width={500} height={860}>
              <Stack direction="row" width={500}>
                {images.map((row) => (
                  <Box sx={styles.slides}>
                    {row.map((image, idx) => (
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            flexGrow: 1,
                            flexShrink: 0,
                          }}
                          src={image.url}
                          alt={image.label}
                          key={image.url}
                          width={500}
                          height={286}
                        />
                        {/* {idx > 0 && ( */}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            left: 0,
                            color: ({ palette }) => palette.primary.light,
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Typography sx={styles.imgLabel}>
                            {String(idx).length < 2 ? "0" + idx : idx}
                          </Typography>
                          <Typography sx={styles.imgLabel}>
                            {image.label}
                          </Typography>
                        </Box>
                        {/* )} */}
                      </Box>
                    ))}
                  </Box>
                ))}
              </Stack>
            </Swiper>
            <Indicator value={2} />
          </Box>

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
