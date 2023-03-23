import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsiveImageCols = (): number => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownXl = useMediaQuery(theme.breakpoints.down("lg"));

  return matchDownMd ? 1 : matchDownXl ? 3 : 5;
};

export default useResponsiveImageCols;
