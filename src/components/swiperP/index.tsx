import { Box, useTheme } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function MySwiper({ children }) {
  const { spacing } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: -1.5,
        width: "calc(100% + 24px)",
        overflow: "hidden",
        position: "relative",
        flexGrow: 1,
        height: "100%",

        "& > *": {
          width: "100%",
        },
        ".swiper": {
          height: "100%",
        },
        ".slider-item": {
          m: 1.5,
          width: "calc(100% - 24px)  !important",
          height: "calc(100% - 24px)  !important",
        },
      }}
    >
      <Swiper
        loop={true}
        spaceBetween={4}
        width={"1400"}
        slidesPerView={2.5}
        pagination={{
          clickable: true,
          el: `.bullets-${2}`,
          bulletActiveClass: "active",
        }}
      >
        {children}
      </Swiper>
      <Box
        className={`bullets-${2}`}
        sx={{
          position: "absolute",
          bottom: 0,
          my: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& > span": {
            margin: spacing(0, 0.25),
            cursor: "pointer",
          },
          ".active": {
            backgroundColor: ({ palette }) => palette.primary.dark,
            opacity: 1,
          },
        }}
      />
    </Box>
  );
}
