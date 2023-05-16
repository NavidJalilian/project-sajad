import { StylesType } from "../../theme/type";

const styles: StylesType<"swiperContainer" | "swiperContent"> = {
  swiperContainer: {
    position: "relative",
    // Adjust the height as needed
    touchAction: "pan-y",
    margin: "auto",
    "&:hover": {
      cursor: "grab",
    },
  },
  swiperContent: {
    display: "flex",
    overflow: "hidden",
    width: "fit-content",
    transition: "transform 0.3s ease-in-out",
  },
};

export default styles;
