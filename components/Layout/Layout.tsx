import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <div className={styles["layout__content"]}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
