import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "content"> = {
  root: {
    fontFamily: "Outfit",
    "& .MuiTabs-indicator": {
      backgroundColor: ({ palette }) => palette.error.light,
    },
  },
  tab: {
    color: ({ palette }) => palette.primary.light,
    "&.Mui-selected": {
      color: ({ palette }) => palette.error.light,
    },
    fontFamily: "Outfit",
  },
  content: {
    // width: "fit-content",
    display: "flex",
  },
};

export default styles;
