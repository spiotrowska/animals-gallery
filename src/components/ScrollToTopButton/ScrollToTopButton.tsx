import { IconButton, Tooltip } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollButtonVisibility = () =>
      setShowButton(window.pageYOffset > 300);

    window.addEventListener("scroll", scrollButtonVisibility);

    return () => window.removeEventListener("scroll", scrollButtonVisibility);
  }, []);

  return showButton ? (
    <Tooltip title="Scroll to top" enterTouchDelay={0}>
      <IconButton
        onClick={handleScrollToTop}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: theme.palette.primary.contrastText,
          color: theme.palette.primary.main,
        }}
      >
        <ExpandLessIcon />
      </IconButton>
    </Tooltip>
  ) : (
    <></>
  );
}

export default ScrollToTopButton;
