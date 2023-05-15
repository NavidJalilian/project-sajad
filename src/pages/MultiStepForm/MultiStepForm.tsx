import { Box, Stepper } from "@mui/material";
import React from "react";
import Form from "../../components/Form";
import Steps from "../../components/Steps";
import styles from "./MultiStepForm.style";

export default function MultiStepForm() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Steps />
        <Form />
      </Box>
    </Box>
  );
}
