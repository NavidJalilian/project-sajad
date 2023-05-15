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
    textTransform: "lowercase",
  },
  content: {
    // width: "fit-content",
    display: "flex",
  },
  name: {
    fontWeight: 700,
    color: ({ palette }) => palette.error.main,
    fontSize: "4rem",
  },
  description: {
    maxWidth: "773px",
    fontSize: "40px",
    my: 4.5,
    color: ({ palette }) => palette.error.main,
  },
  button: {
    maxWidth: "250px",
    borderRadius: "15px",
    bgcolor: ({ palette }) => palette.error.main,
    textTransform: "capitalize",
  },
};

export default styles;
