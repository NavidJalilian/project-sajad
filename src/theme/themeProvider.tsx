import { ThemeProvider } from "@mui/system";
import theme from "../theme/theme";

type Props = {
  children: React.ReactNode;
};

export default function MultiStepThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
