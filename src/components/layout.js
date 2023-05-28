import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default function Layout(props) {
  React.useEffect(() => {
    const link = document.getElementById("hamburger");
    link.addEventListener("click", myFunction);

    return () => {
      link.removeEventListener("click", myFunction);
    };
  }, []);
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <header className={styles.header}>
        <div class="image">
          <a href="/">
            <img
              src="https://drive.google.com/uc?id=1AkMqPlsmLvqkEZqMxZ1W3N4BP-ZiaJdV"
              alt="icon"
              width="400"
            />
          </a>
        </div>
        <a href="#" id="hamburger" class="icon">
          <i class="fa fa-bars"></i>
        </a>
      </header>
      <div className={styles.myLinks} id="myLinks">
        <a href="/">Home</a>
        <a href="mailto:inquiries@intellijams.io">Contact</a>
        <a href="/demo">Products</a>
      </div>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="/">© 2023 by IntelliJams</a>
        <a href="https://www.facebook.com/intellijams/">Facebook</a>
        <a href="https://www.instagram.com/intellijams/">Instagram</a>
      </footer>
    </div>
  );
}
