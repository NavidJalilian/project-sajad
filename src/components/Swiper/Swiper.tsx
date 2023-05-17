import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import LapTop from "../../assets/images/laptop.jpg";
import Arrow from "../../assets/images/arrow.svg";
import RightArrow from "../../assets/images/rightArrow.svg";
import RightArrowRed from "../../assets/images/rightArrowRed.svg";
import styles from "./Swiper.style";
import Indicator from "../Indicator/Indicator";

const Swiper = ({
  children,
  size = 2,
  width,
  showIndicator = false,

  prev,
  indicatorWidth = 350,

  variant,
}) => {
  const [Index, setIndex] = useState(0);
  const maxIndex = size - 1;
  const [Info, setInfo] = useState({ swipeEndX: 0, swipeStartX: 0 });

  const handlePrevClick = () => {
    if (Index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (Index < maxIndex && Index < size - 1 / 2) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleMouseUp = (event) => {
    setInfo((i) => ({ ...i, swipeEndX: event.clientX }));
    const swipeDistance = Info.swipeEndX - Info.swipeStartX;
    if (swipeDistance > 0) {
      // Right swipe
      handlePrevClick();
    } else if (swipeDistance < 0) {
      // Left swipe
      handleNextClick();
    }
  };
  const handleMouseDown = (event) => {
    event.preventDefault();
    setInfo((i) => ({ ...i, swipeStartX: event.clientX }));
  };

  console.log(Info);
  return (
    <Box>
      <Box
        sx={{ ...styles.swiperContainer, position: "relative", width }}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
      >
        <Box
          style={{
            flexGrow: 1,
            transition: "transform 0.3s ease-in-out",
            width,
            transform: `translateX(-${Index * 100}%)`,
          }}
        >
          {children}
        </Box>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={
          variant === "outline" ?  "space-between ": "space-around"
        }
        
      >
        {prev && (
          <Button
            sx={{
              color: ({ palette }) => palette.error.main,
              transform: "rotate(180deg)",
              bgcolor: ({ palette }) => palette.primary.light,
            }}
            variant="contained"
            onClick={handlePrevClick}
            disabled={Index === 0}
            disableElevation
          >
            <Box
              component="img"
              src={RightArrowRed}
              maxWidth={22}
              maxHeight={22}
            />
          </Button>
        )}
        {showIndicator && (
          <Indicator {...{ Index, setIndex, size, maxWidth: indicatorWidth }} />
        )}
        {variant === "outline" && (
          <Button
            variant="text"
            onClick={handleNextClick}
            disabled={Index === maxIndex}
          >
            <Box
              sx={{ position: "absolute", left: "100%", bottom: "150%" }}
              component="img"
              src={Arrow}
            />
          </Button>
        )}
        {variant === "filled" && (
          <Button
            sx={{
              bgcolor: ({ palette }) => palette.error.main,
              py: 4,
              px: 8,
              borderRadius: 8,
            }}
            variant="contained"
            onClick={handleNextClick}
            disabled={Index === maxIndex}
          >
            <Box component="img" src={RightArrow} />
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Swiper;
