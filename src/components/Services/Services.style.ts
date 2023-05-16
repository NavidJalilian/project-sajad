import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "slides" | "content"> = {
  root: {
    label: "services",
    backgroundColor: ({ palette }) => palette.grey["100"],
  },
  container: {
    label: "servicesContainer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slides: {
    label: "images",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  content: {},
};

export default styles;
