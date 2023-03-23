import { ReactNode } from "react";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";
import Navbar from "../../components/Navbar/Navbar";
import StyledLayoutBody from "../../components/UI/StyledLayoutBody/StyledLayoutBody";
import Footer from "./../../components/Footer/Footer";
import ScrollToTopButton from "./../../components/ScrollToTopButton/ScrollToTopButton";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <ErrorNotification />
      <Navbar />
      <StyledLayoutBody>{props.children}</StyledLayoutBody>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
