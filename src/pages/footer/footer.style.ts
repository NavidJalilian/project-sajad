import { StylesType } from "../../theme/type";

const styles: StylesType<"root"> = {
  root: {
    backgroundColor: ({ palette }) => palette.primary[900],
    color: ({ palette }) => palette.primary.light,
  },

  description: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: " 13.3571px",
    lineHeight: 1.8,
    /* or 24px */
    letterSpacing: "-0.007em",

    maxWidth: 348,
  },
  link: {
    color: ({ palette }) => palette.primary.light,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: " 17px",
    lineHeight: 1.08,
    /* or 24px */
    letterSpacing: "-0.007em",
  },
  headerLink: {
    fontSize: " 22px",
    color: ({ palette }) => palette.primary.light,
  },
  copyright: {
    textAlign: "center",
    mb: "102px",
    color: ({ palette }) => palette.primary.light,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "108%",
    letterSpacing: "-0.027em",
  },
};

export default styles;
