import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "slides" | "content" | "imgLabel"> = {
  root: {
    label: "services",
    overflow: "hidden",
    backgroundColor: ({ palette }) => palette.grey["100"],
    mt: "50px",
    position: "relative",
  },
  text: {
    my: 2,
    mb: 8,
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
    maxWidth: "358px",
  },
  button: {
    maxWidth: "249px",
    borderRadius: "15px",
    bgcolor: ({ palette }) => palette.grey[200],
    color: ({ palette }) => palette.primary.light,
    textTransform: "capitalize",
    padding: "16px 24px",
    img: {
      ml: 2,
    },
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
    gap: 16,
    ml: "110px",
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
  rateImg: {
    width: 350,
    height: 350,
    aspectRatio: "1/1",
    zIndex: 100,
    position: "absolute",
    left: "-70px",
    top: "962px",
  },
  cameraImg: {
    width: 400,
    height: 400,
    zIndex: 100,
    position: "absolute",
    right: "-50px",
    top: "1350px",
  },
};

export default styles;
