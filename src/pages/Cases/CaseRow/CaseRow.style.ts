import { StylesType } from "../../../theme/type";

const styles: StylesType<"label"> = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
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
    color: ({ palette }) => palette.common.black,
    ".redText": {
      color: ({ palette }) => palette.error.main,
    },
  },
  rate: {
    label: "rate",
    display: "flex",
    mt: "50px",
    gap: 1,
    img: {
      width: 20,
      height: 20,
    },
  },
  label3: {
    color: ({ palette }) => palette.common.black,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 32,
    lineHeight: "100%",
    letterSpacing: "0.013em",
    maxWidth: "315px",
  },
  des3: {
    mt: "49px",
    color: ({ palette }) => palette.common.black,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 24,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
    maxWidth: "315px",
  },
};

export default styles;
