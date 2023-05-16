import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./CaseRow.style";
import redStarIcon from "../../../assets/images/redStar.svg";
import blackStarIcon from "../../../assets/images/blackStar.svg";

export default function CaseRow({ type, labels, descriptions, images }) {
  if (type === 1) {
    return (
      <>
        <Grid item md={1} />
        <Grid item md={4}>
          <Stack>
            <Typography
              sx={{
                ...styles.label,
                color: ({ palette }) => palette.primary.main,
              }}
            >
              {labels[0]}{" "}
            </Typography>
            <Typography sx={styles.label}> {labels[1]} </Typography>
            <Typography sx={styles.label}> {labels[2]} </Typography>
            <Typography sx={styles.des}>{descriptions[0]}</Typography>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Box component="img" src={images[0]} maxWidth={630} maxHeight={460} />
        </Grid>
        <Grid item md={1} />
      </>
    );
  }

  if (type === 2) {
    return (
      <>
        <Grid item md={1} />
        <Grid item md={7}>
          <Box component="img" src={images[0]} maxWidth={679} maxHeight={354} />
        </Grid>
        <Grid item md={3}>
          <Stack>
            <Typography sx={{ ...styles.des, maxWidth: "315px" }}>
              {descriptions[0]}{" "}
              <span className="redText">{descriptions[1]}</span>{" "}
              {descriptions[2]}
            </Typography>
            <Box sx={styles.rate}>
              <img src={redStarIcon} alt="Red Star Icon" />
              <img src={redStarIcon} alt="Red Star Icon" />
              <img src={redStarIcon} alt="Red Star Icon" />
              <img src={redStarIcon} alt="Red Star Icon" />
              <img src={blackStarIcon} alt="Black Star Icon" />
            </Box>
          </Stack>
        </Grid>
        <Grid item md={1} />
      </>
    );
  }

  if (type === 3) {
    return (
      <>
        <Grid item md={1} />
        <Grid item md={3}>
          <Box component="img" src={images[0]} maxWidth={312} maxHeight={354} />
        </Grid>
        <Grid item md={4}>
          <Stack>
            <Typography sx={styles.label3}> {labels[0]}</Typography>
            <Typography sx={styles.des3}> {descriptions[0]}</Typography>
          </Stack>
        </Grid>
        <Grid item md={3}>
          <Box component="img" src={images[1]} maxWidth={312} maxHeight={354} />
        </Grid>
        <Grid item md={1} />
      </>
    );
  }
  return <></>;
}
