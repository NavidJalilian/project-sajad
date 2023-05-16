import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "../../components/Banner";
import styles from "./Cases.style";
import Girl1 from "../../assets/images/girl.jpg";
const data = [
  {
    label: ["Our", "case", "Studies"],
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Cases() {
  return (
    <Box className="container">
      <Grid container sx={styles.grid} spacing={5}>
        <Grid item md={4.5} sx={styles.header}>
          <Stack>
            <Typography
              sx={{
                ...styles.label,
                color: ({ palette }) => palette.primary.main,
              }}
            >
              Our{" "}
            </Typography>
            <Typography sx={styles.label}> case </Typography>
            <Typography sx={styles.label}> Studies</Typography>
            <Typography sx={styles.des}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={7.5} sx={styles.description1}>
          <Box maxWidth={630} maxHeight={460}>
            <Box component="img" src={Girl1} />
          </Box>
        </Grid>
        <Grid item md={11} sx={styles.picture1}>
          Picture 1 content
        </Grid>
        <Grid item md={6.5} sx={styles.picture2}>
          Picture 2 content
        </Grid>
        <Grid item md={11} sx={styles.description2}>
          Description 2 content
        </Grid>
        <Grid item md={5} sx={styles.picture3}>
          Picture 3 content
        </Grid>
        <Grid item md={7.2} sx={styles.description3}>
          Description 3 content
        </Grid>
        <Grid item md={11} sx={styles.picture4}>
          Picture 4 content
        </Grid>
      </Grid>
    </Box>
  );
}
