import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "title" | "label"> = {
  root: {
    mt: "146px",
  },
  title: {
    lineHeight: 1,
    fontSize: 100,
    fontWeight: 700,
  },
  label: {
    color: ({ palette }) => palette.error.main,
    fontSize: 100,
    fontWeight: 700,

    lineHeight: 1,
  },
  description: {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24.7104px",
    lineHeight: "120.5%",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.033em",
  },
};

export default styles;
