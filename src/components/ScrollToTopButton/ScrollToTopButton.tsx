import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import StyledScrollToTopButton from "../UI/StyledScrollToTopButton/StyledScrollToTopButton";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

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
    <StyledScrollToTopButton variant="contained" onClick={handleScrollToTop}>
      <Tooltip title="Scroll to top" enterTouchDelay={0}>
        <ExpandLessIcon />
      </Tooltip>
    </StyledScrollToTopButton>
  ) : (
    <></>
  );
}

export default ScrollToTopButton;
