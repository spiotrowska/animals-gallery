import { ReactNode } from "react";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";
import Navbar from "../../components/Navbar/Navbar";
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
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 74,
          minHeight: "calc(100vh - 128px)",
        }}
      >
        {props.children}
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
