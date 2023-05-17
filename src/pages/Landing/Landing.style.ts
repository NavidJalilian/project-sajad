import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "content"> = {
  root: {
    fontFamily: "Outfit",
    "& .MuiTabs-indicator": {
      backgroundColor: ({ palette }) => palette.error.light,
    },
  },
  tab: {
    color: ({ palette }) => palette.primary.dark,
    "&:hover": {
      color: ({ palette }) => palette.error.light,
    },
    textTransform: "lowercase",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 24.5502,
    lineHeight: "120.5%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.033em",
  },
  content: {
    // width: "fit-content",
    display: "flex",
  },
  name: {
    fontWeight: 700,
    color: ({ palette }) => palette.error.main,
    fontSize: "4rem",
  },
  description: {
    maxWidth: "773px",
    my: 4.5,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "98%",
    letterSpacing: "0.033em",
    color: ({ palette }) => palette.primary.light,
    ".redText": {
      color: ({ palette }) => palette.error.main,
    },
  },
  button: {
    maxWidth: "250px",
    borderRadius: "15px",
    bgcolor: ({ palette }) => palette.error.main,
    textTransform: "capitalize",
  },
};

export default styles;
