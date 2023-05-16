import { Box, ButtonBase, Stack } from "@mui/material";
import React, { useState } from "react";

export default function Indicator({ Index, setIndex }) {
  const width = 100;
  const height = 12;
  const states = [0, 1];

  return (
    <Stack direction="row" width={100}>
      {states.map((item, idx) => (
        <ButtonBase
          onClick={() => setIndex(item)}
          key={idx}
          sx={{
            background:
              item === Index
                ? ({ palette }) => palette.error.light
                : ({ palette }) => palette.grey[200],
            width: (width / states.length) * 100 + "%",
            height,
            borderRadius:
              idx === 0
                ? "8px 0 0 8px"
                : idx === states.length - 1
                ? "0 8px 8px 0"
                : "none",
            zIndex: 1000,
          }}
        ></ButtonBase>
      ))}
    </Stack>
  );
}
