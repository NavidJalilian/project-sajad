import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Cases.style";
import Girl1Img from "../../assets/images/girl1.jpg";
import Girl2Img from "../../assets/images/girl2.jpg";
import Boy1Img from "../../assets/images/boy1.jpg";
import Boy2Img from "../../assets/images/boy2.jpg";
import CaseRow from "./CaseRow";

const data = [
  {
    type: 1,
    labels: ["Our", "case", "Studies"],
    descriptions: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    images: [Girl1Img],
  },
  {
    type: 2,
    labels: [],
    descriptions: [
      "Lorem ipsum",
      "dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    images: [Girl2Img],
  },
  {
    type: 3,
    labels: ["The best consultant we’ve ever had"],
    descriptions: ["-Revenson’s Group"],
    images: [Boy1Img, Boy2Img],
  },
];

export default function Cases() {
  return (
    <Box className="container">
      <Grid container sx={styles.grid} spacing={5}>
        {data.map((item) => CaseRow({ ...item }))}
      </Grid>
    </Box>
  );
}
