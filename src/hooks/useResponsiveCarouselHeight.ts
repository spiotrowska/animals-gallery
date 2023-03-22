import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useResponsiveCarouselHeight = (): number => {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down("md"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return matchDownMd ? 200 : matchDownLg ? 300 : 500;
};

export default useResponsiveCarouselHeight;
