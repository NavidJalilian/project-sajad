import { StylesType } from "../../theme/type";

const styles: StylesType<"root"> = {
  root: {
    label: "newsLetter",
    position: "relative",
    boxShadow: "-1px 1px 9px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
    mx: "20px",
    height: "296px",
    pl: "42px",
    mt: "86px",
    mb: "41px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ".newsLetterImage": {
      position: "absolute",
      top: 0,
      right: 0,
      transformOrigin: "top left",
      // transform: "skewX(344deg)",
      maxWidth: "596px",
      height: "296px",
      // objectFit: "cover",
      borderRadius: "0 30px 30px 0",
    },
  },
  newsLetterText: {
    label: "newsLetterText",
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "45.7709px",
    lineHeight: "108%",
    letterSpacing: "-0.027em",
    maxWidth: "616px",
    color: ({ palette }) => palette.primary.dark,
    ".textRed": {
      color: ({ palette }) => palette.error.main,
    },
  },
  inputGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "enter",
    gap: 1,
    mt: "28px",
  },
  emailInput: {
    borderRadius: "20px",
    borderColor: "#000000",
    maxWidth: "650px",
    height: "49px",
    flex: 1,
  },
  sendButton: {
    backgroundColor: ({ palette }) => palette.primary.main,
    lineHeight: 1,
    width: "49px",
    height: "49px",
  },
};

export default styles;
