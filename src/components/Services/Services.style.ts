import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "slides" | "content" | "imgLabel"> = {
  root: {
    label: "services",
    backgroundColor: ({ palette }) => palette.grey["100"],
    mt: "50px",
    display: "flex",
  },
  container: {
    label: "servicesContainer",
    display: "flex",
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
    width: 500,
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
  },
};

export default styles;
