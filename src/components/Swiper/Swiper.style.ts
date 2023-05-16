import { StylesType } from "../../theme/type";

const styles: StylesType<"swiperContainer" | "swiperContent"> = {
  swiperContainer: {
    width: "500px",
    height: "860px",
    position: "relative",
    // Adjust the height as needed
    touchAction: "pan-y",
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
