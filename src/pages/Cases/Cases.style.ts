import { StylesType } from "../../theme/type";

const styles: StylesType<"grid"> = {
  grid: {
    label: "cases",
    color: ({ palette }) => palette.primary[900],
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    gap: 6,
    py: 2,
  },
};

export default styles;
