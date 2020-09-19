import React from "react";
import Header from "components/commons/Header";
import styles from "./styles.module.scss";

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default MainLayout;
