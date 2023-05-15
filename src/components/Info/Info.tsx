import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./Info.style";
import InfoRightImg from "../../assets/images/info-right.jpg";
import InfoMiddleImg from "../../assets/images/info-middle.jpg";
import InfoLeftImg from "../../assets/images/info-left.jpg";
import apartmentIcon from "../../assets/images/apartment.svg";
import copyIcon from "../../assets/images/copy.svg";
import movieIcon from "../../assets/images/movie.svg";
import DeskImg from "../../assets/images/desk.png";
import RightArrowIcon from "../../assets/images/rightArrow.svg";

export default function Info() {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.chooseUs}>Choose us</Typography>
      <Typography variant="h1" sx={styles.mainTitle}>
        Why <span className="underlineRed">Jacob</span>?
      </Typography>
      <Box sx={styles.images}>
        <img src={InfoLeftImg} alt="Info Left Img" />
        <img src={InfoMiddleImg} alt="Info Middle Img" />
        <img src={InfoRightImg} alt="Info Right Img" />
      </Box>
      <Typography variant="body2" sx={styles.description}>
        Honour; Text even least, for were concept felt nonsense, hitting english
        time, and position. To the you feedback without. The project brown and
        by diagrams out
      </Typography>
      <Box sx={styles.features}>
        <Box sx={styles.feature}>
          <img src={apartmentIcon} alt="Apartment Icon" />
          <Typography variant="body2">
            Worked with fortune 500 companies
          </Typography>
        </Box>
        <Box sx={styles.feature}>
          <img src={movieIcon} alt="Movie Icon" />
          <Typography variant="body2">
            Created hundreds of commercials
          </Typography>
        </Box>
        <Box sx={styles.feature}>
          <img src={copyIcon} alt="Copy Icon" />
          <Typography variant="body2">
            Generated top-quality content for thousands
          </Typography>
        </Box>
      </Box>
      <Typography variant="h2" sx={styles.slogan}>
        Our job, <span className="textRed">your spotlight.</span>
      </Typography>

      <Box sx={styles.newsLetter}>
        <Box>
          <Typography variant="h2" sx={styles.newsLetterText}>
            Business Ideas, crazy ideas and marketing techniques
            <span className="textRed"> straight to your inbox</span>
          </Typography>
          <Box sx={styles.inputGroup}>
            <TextField
              id="email"
              variant="outlined"
              placeholder="Email Address..."
              sx={styles.emailInput}
            />
            <IconButton sx={styles.sendButton} disableRipple>
              <img src={RightArrowIcon} width={22} height={20} />
            </IconButton>
          </Box>
        </Box>
        <img src={DeskImg} alt="Desk Img" />
      </Box>
    </Box>
  );
}
