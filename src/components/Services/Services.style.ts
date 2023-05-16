import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "slides" | "content"> = {
  root: {
    label: "services",
    backgroundColor: ({ palette }) => palette.grey["100"],
    mt: "50px",
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
    width: 500,
    flexDirection: "column",
    gap: 2,
    flexGrow: 1,
    flexShrink: 0,
  },
  content: {},
};

export default styles;
