import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "content"> = {
  root: {
    maxWidth: 800,
    backgroundColor: ({ palette }) => palette.grey[100],
    margin: "auto",
    fontFamily: "Outfit",
  },
  tab: {
    color: ({ palette }) => palette.primary.light,
    "&.Mui-selected": {
      color: ({ palette }) => palette.error.light,
    },
    "&.MuiTabs-indicator": {
      "&.Mui-selected": {
        color: ({ palette }) => palette.error.light,
      },
    },
  },
  content: {
    // width: "fit-content",
    display: "flex",
  },
};

export default styles;
