import Head from "next/head";
import React, { Fragment } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footerWrapper}>
        <div>
          Copywrite@Aaltapori {new Date().getFullYear()}
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;
