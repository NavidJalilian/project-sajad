import { StylesType } from "../../theme/type";

const styles: StylesType<"grid"> = {
  grid: {
    label: "cases",
    color: ({ palette }) => palette.primary[900],
    display: "flex",
    flexDirection: "column",
    gap: 6,
    py: 2,
  },
};

export default styles;
