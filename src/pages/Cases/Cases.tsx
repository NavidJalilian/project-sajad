import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import JacobTitle from "../../assets/images/jacob.png";
import styles from "./Cases.style";

const data = [
  {
    label: ["Our", "case", "Studies"],
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Cases() {
  return (
    <Box>
      <Box sx={styles.grid}>
        <Box sx={styles.description1}>
          <Typography
            sx={{ ...styles.label, color: ({ palette }) => palette.error.main }}
          >
            Our
          </Typography>
          <Typography sx={styles.label}> case Studies</Typography>
          <Typography sx={styles.label}> Studies</Typography>
          <Typography sx={styles.des}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
