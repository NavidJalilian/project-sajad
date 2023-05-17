import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import LapTop from "../../assets/images/laptop.jpg";
import Arrow from "../../assets/images/arrow.svg";
import styles from "./Swiper.style";
import Indicator from "../Indicator/Indicator";

const Swiper = ({ children, size, width, showIndicator = false }) => {
  const [Index, setIndex] = useState(0);
  const maxIndex = size - 1;
  const [Info, setInfo] = useState({ swipeEndX: 0, swipeStartX: 0 });
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
  };
  const handlePrevClick = () => { 
    if (Index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (Index < maxIndex) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleMouseUp = (event) => {
    event.stopPropagation();

    console.log(event.clientX, event.clientY);

    setInfo((i) => ({ ...i, swipeEndX: event.clientX }));
    const swipeDistance = Info.swipeEndX - Info.swipeStartX;
    console.log(`swipe distance: ${swipeDistance}`);
    if (swipeDistance > 0) {
      // Right swipe
      handleNextClick();
    } else if (swipeDistance < 0) {
      // Left swipe
      handlePrevClick();
    }
  };
  const handleMouseDown = (event) => {
    event.stopPropagation();
    setInfo((i) => ({ ...i, swipeEndX: event.clientX }));
  };
  return (
    <Box>
      <Box
        sx={{ ...styles.swiperContainer, width }}
        onMouseUp={handleMouseUp}
        // onMouseDown={handleMouseDown}
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
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        {showIndicator && <Indicator {...{ Index, setIndex }} />}
        <Button onClick={handleNextClick} disabled={Index === maxIndex}>
          <Box component="img" src={Arrow} />
        </Button>
      </Stack>
    </Box>
  );
};

export default Swiper;
