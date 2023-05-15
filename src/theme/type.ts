import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material";

export type StylesType<T extends string> = {
  [key in T]: SxProps<Theme>;
} & {
  [key: string]: SxProps<Theme>;
};
