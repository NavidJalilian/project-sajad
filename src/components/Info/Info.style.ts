import { StylesType } from "../../theme/type";

const styles: StylesType<"root"> = {
  root: {
    label: "infoBox",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ({ palette }) => palette.primary.light,
  },
};

export default styles;
