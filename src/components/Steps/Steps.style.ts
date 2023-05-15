import { StylesType } from "../../theme/type";
import IMG from "../../assets/images/bg-sidebar-desktop.svg";

const styles: StylesType<"root"> = {
  root: {
    // maxWidth: 400,
    flexGrow: 1,
    backgroundImage: "url(" + IMG + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

export default styles;
