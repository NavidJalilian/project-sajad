import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import styles from "./Services.style";
import InfoRightImg from "../../assets/images/info-right.jpg";
import InfoMiddleImg from "../../assets/images/info-middle.jpg";
import InfoLeftImg from "../../assets/images/info-left.jpg";
import RightArrowIcon from "../../assets/images/rightArrow.svg";
import RightArrowRedIcon from "../../assets/images/rightArrowRed.svg";
import BannerImg from "../../assets/images/banner.png";
import Swiper from "../../components/Swiper";
import Indicator from "../../components/Indicator/Indicator";
import Banner from "../../components/Banner";
import Rate from "../../assets/images/rate.svg";
import Camera from "../../assets/images/camera.svg";

const images = [
  [
    { url: InfoLeftImg, label: "Commercials", id: 1 },

    { url: InfoMiddleImg, label: "Consulting", id: 2 },

    { url: InfoRightImg, label: "Company", id: 3 },
  ],

  [
    { url: InfoLeftImg, label: "Personnel", id: 4 },

    { url: InfoMiddleImg, label: "Services", id: 5 },

    { url: InfoRightImg, label: "Organization", id: 6 },
  ],
];

export default function Services() {
  const [Index, setIndex] = useState(0);

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
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box sx={{ ...styles.content }} className="container">
            <Box
              component="img"
              src={Rate}
              sx={{
                width: 350,
                height: 350,
                aspectRatio: "1/1",

                zIndex: 100,
              }}
            />

            <Swiper
              size={images.length}
              width={500}
              {...{ Index, setIndex }}
              showIndicator
            >
              <Stack direction="row">
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
                            borderRadius: 4,
                            flexShrink: 0,
                          }}
                          src={image.url}
                          alt={image.label}
                          key={image.url}
                          width={500}
                        />
                        {/* {idx > 0 && ( */}
                        <Box
                          sx={{
                            position: "absolute",

                            bottom: 20,

                            left: 0,

                            color: ({ palette }) => palette.primary.light,

                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Typography sx={styles.imgLabel} mx={1}>
                            {String(image.id).length < 2
                              ? "0" + image.id
                              : image.id}
                          </Typography>

                          <Typography sx={styles.imgLabel} mx={1}>
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

            <Box>
              <Typography variant="h1" sx={styles.mainTitle}>
                Our
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  ...styles.mainTitle,
                  color: ({ palette }) => palette.error.main,
                }}
                className="redText"
              >
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
              <Box
                component="img"
                src={Camera}
                sx={{
                  width: 400,
                  height: 400,
                  zIndex: 100,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
