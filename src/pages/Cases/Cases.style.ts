import { StylesType } from "../../theme/type";

const styles: StylesType<"grid"> = {
  grid: {
    color: ({ palette }) => palette.primary[900],
    p: 2,
  },
};

export default styles;
