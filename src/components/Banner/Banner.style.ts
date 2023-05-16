import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "title"> = {
  root: {
    label: "BannerBox",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ({ palette }) => palette.primary.dark,
    color: ({ palette }) => palette.primary.light,
    mt: "58px",
    position: "relative",
    width: "100%",
  },
  title: {
    maxWidth: 747,
    fontWeight: 400,
    fontSize: "90px",
    lineHeight: 1,
  },
  container: {
    position: "absolute",
    inset: 0,
    zIndex: 100,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    px: "60px",
    py: "30px",
    borderColor: ({ palette }) => palette.primary.light,
    fontSize: "36px",
    lineHeight: 1.2,
    borderRadius: 8,
    borderWidth: "3px",
    color: ({ palette }) => palette.primary.light,
    "&:hover": {
      borderWidth: "3px",
      color: ({ palette }) => palette.primary.light,

      borderColor: ({ palette }) => palette.error.main,
    },
  },
  buttonTitle: {
    lineHeight: 1.08,
    textTransform: "capitalize",
    fontSize: "36px",
  },
};

export default styles;
