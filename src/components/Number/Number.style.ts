import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "title"> = {
  root: {
    backgroundColor: ({ palette }) => palette.error.main,
    color: ({ palette }) => palette.primary.light,
    borderRadius: 4,
    px: 6,
    width: 400,
  },
  title: {
    fontSize: "5.1rem",
    lineHeight: 1.2,
    fontWeight: 700,
  },
  label: {
    lineHeight: 1.2,

    fontSize: "1.35rem",
  },
};

export default styles;
