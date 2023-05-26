import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <div class="image">
          <a href="/">
            <img
              src="https://drive.google.com/uc?id=1mlQHdoI3Z6JxdyHreyDn_JJKosfIVFmU"
              alt="icon"
              width="80"
            />
          </a>
        </div>
        <div class="container">
          <div class="text">
            <a href="/">
              <h2>Home</h2>
            </a>
          </div>
          <div class="text">
            <a href="/demo">
              <h2>Products</h2>
            </a>
          </div>
          <div class="text">
            <a href="inquiries@intellijams.io">
              <h2>Contact</h2>
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="/">© 2023 by IntelliJams</a>
        <a href="https://www.facebook.com/intellijams/">Facebook</a>
        <a href="https://www.instagram.com/intellijams/">Instagram</a>
      </footer>
    </div>
  );
}
