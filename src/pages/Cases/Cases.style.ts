import { StylesType } from "../../theme/type";

const styles: StylesType<"grid"> = {
  grid: {
    color: ({ palette }) => palette.primary[900],
    // color: ({ palette }) => palette.primary.light,

    p: 2,
  },
  label: {
    color: ({ palette }) => palette.error.main,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 98,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
  des: {
    mt: 2,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
};

export default styles;
