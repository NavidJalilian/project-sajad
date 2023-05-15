import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "form" | "input" | "textarea"> = {
  root: {
    padding: 1,
    fontFamily: "Ubuntu",
    color: ({ palette }) => palette.grey[100],
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    fontSize: 16,
    border: "1px solid gray",
    borderRadius: 4,
    padding: "0.5rem",
    marginBottom: "1rem",
  },
  textarea: {
    fontSize: 16,
    border: "1px solid gray",
    borderRadius: 4,
    padding: "0.5rem",
    marginBottom: "1rem",
  },
};

export default styles;
