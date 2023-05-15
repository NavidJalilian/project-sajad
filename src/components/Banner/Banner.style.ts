import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "title"> = {
  root: {
    label: "infoBox",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ({ palette }) => palette.primary.dark,
    color: ({ palette }) => palette.primary.light,
  },
  title: {
    maxWidth: 600,
    fontWeight: 400,
    fontSize: "90px",
    lineHeight: 1,
  },
  button: {
    fontSize: "36px",
    borderRadius: 2,
    color: ({ palette }) => palette.primary.light,
  },
};

export default styles;
