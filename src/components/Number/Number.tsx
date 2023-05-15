import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Number.style";

export default function Number({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={styles.root}
    >
      <Typography variant="h6" sx={styles.title}>
        {value}+
      </Typography>
      <Typography variant="body2" sx={styles.label}>
        {label}
      </Typography>
    </Stack>
  );
}
