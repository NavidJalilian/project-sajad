import { Box, IconButton, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import styles from "./NewsLetter.style";
import MonitorImg from "../../assets/images/monitor.png";
import RightArrowIcon from "../../assets/images/rightArrow.svg";

export default function NewsLetter() {
  return (
    <Box sx={styles.root}>
      <Box>
        <Typography variant="h2" sx={styles.newsLetterText}>
          Business Ideas, crazy ideas and marketing techniques
          <span className="textRed"> straight to your inbox</span>
        </Typography>
        <Box sx={styles.inputGroup}>
          <OutlinedInput
            id="email"
            placeholder="Email Address..."
            sx={styles.emailInput}
          />
          <IconButton sx={styles.sendButton} disableRipple>
            <img src={RightArrowIcon} width={28} height={20} />
          </IconButton>
        </Box>
      </Box>
      <img src={MonitorImg} alt="Monitor Img" className="newsLetterImage" />
    </Box>
  );
}
