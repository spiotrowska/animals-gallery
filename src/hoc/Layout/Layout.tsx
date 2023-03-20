import { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
