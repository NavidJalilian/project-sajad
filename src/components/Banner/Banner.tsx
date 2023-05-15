import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import LapTop from "../../assets/images/laptop.jpg";

import styles from "./Banner.style";

export default function banner() {
  return (
    <Box sx={styles.root}>
      <Box src={LapTop} height={300} component="img" />
    </Box>
  );
}

{
  /* <Button variant="outlined" sx={styles.button}>
<Stack
  direction="row"
  justifyContent="space-around"
  width="100%"
  alignItems="center"
  py={0.5}
>
  <Typography>Explore More </Typography>
  <Box>
    <img src={RightArrowIcon} width={22} height={20} />
  </Box>
</Stack>
</Button> */
}
