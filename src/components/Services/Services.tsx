import React from "react";
import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./Services.style";
import InfoRightImg from "../../assets/images/info-right.jpg";
import InfoMiddleImg from "../../assets/images/info-middle.jpg";
import InfoLeftImg from "../../assets/images/info-left.jpg";
import apartmentIcon from "../../assets/images/apartment.svg";
import copyIcon from "../../assets/images/copy.svg";
import movieIcon from "../../assets/images/movie.svg";
import DeskImg from "../../assets/images/desk.png";
import RightArrowIcon from "../../assets/images/rightArrow.svg";

export default function Services() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container} className="container">
        <Box sx={styles.slides}>
          <img src={InfoLeftImg} alt="Info Left Img" />
          <img src={InfoMiddleImg} alt="Info Middle Img" />
          <img src={InfoRightImg} alt="Info Right Img" />
        </Box>

        <Box sx={styles.content}>
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
  );
}
