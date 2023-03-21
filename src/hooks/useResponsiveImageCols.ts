import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsiveImageCols = (): number => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("md"));

  return matchDownMd ? 1 : matchDownLg ? 3 : 5;
};

export default useResponsiveImageCols;
