import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Number from "../../components/Number/Number";
import Play from "../../assets/images/play.svg";
import Status from "../../assets/images/status.jpg";
import styles from "./Sales.style";

export default function Sales() {
  const [Values, setValues] = React.useState([
    { value: 100, title: "followers" },
    { value: 50, title: "client-based projects" },
    { value: 30, title: "followers" },
  ]);

  return (
    <Box sx={styles.root} className="container">
      <Stack direction="row" justifyContent="center" gap={1.5} p={1}>
        {Values.map((item) => (
          <Number {...{ value: item.value, label: item.title }} />
        ))}
      </Stack>
      <Stack direction="row" alignItems="start" gap={8} mt={8} pb={10}>
        <Box
          sx={{
            width: 91,
            height: 91,
            transform: "translate(24px,8px)",
          }}
          component="img"
          src={Play}
          alt="play button"
        />

        <Stack gap={2}>
          <Typography variant="h6" sx={styles.title}>
            Our
          </Typography>
          <Typography variant="h6" sx={styles.label}>
            Sales
          </Typography>
          <Typography variant="h6" sx={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Box
          sx={{
            borderRadius: 8,
            maxWidth: 840,
            maxHeight: 527,
          }}
          component="img"
          src={Status}
          alt="play button"
        />
      </Stack>
    </Box>
  );
}
