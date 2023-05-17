import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "slides" | "content" | "imgLabel"> = {
  root: {
    label: "services",
    overflow: "hidden",
    backgroundColor: ({ palette }) => palette.grey["100"],

    mt: "50px",
  },
  text: {
    my: 2,
    mb: 3,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
  container: {
    label: "servicesContainer",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    width: "100%",
  },

  slogan: {
    label: "slogan",

    fontFamily: "Outfit",

    fontStyle: "normal",

    fontWeight: 700,

    fontSize: "70px",

    lineHeight: "120.5%",

    letterSpacing: "0.033em",

    pt: "37px",

    color: ({ palette }) => palette.primary.dark,

    ".textRed": {
      color: ({ palette }) => palette.error.main,
    },
  },

  slides: {
    label: "images",

    display: "flex",

    overflow: "hidden",

    flexDirection: "column",

    gap: 1,

    flexGrow: 1,

    flexShrink: 0,
  },

  imgLabel: {
    fontFamily: "'Outfit', sans-serif",

    fontStyle: "normal",

    fontWeight: 300,

    fontSize: "50px",

    lineHeight: "120.5%",

    letterSpacing: "0.033em",

    display: "flex",

    mt: "112px",
  },

  content: {
    display: "flex",
    mt: "112px",
  },

  bannerArrowBtn: {
    position: "absolute",

    bottom: "20px",

    right: 0,
  },
  mainTitle: {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 98,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
};

export default styles;
