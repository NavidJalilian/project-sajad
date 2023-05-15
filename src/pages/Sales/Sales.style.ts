import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "title" | "label"> = {
  root: {},
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
    fontWeight: 400,

    fontSize: 20,
    maxWidth: 251,
    lineHeight: 1.2,
  },
};

export default styles;
