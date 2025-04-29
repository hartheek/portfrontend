import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1> <a href="https://www.linkedin.com/in/hartheek-reddy-katta/">Linkedln</a> </h1> 
      <h1><a href=""> Instagram </a></h1> 
      < h1><a href="https://github.com/hartheek"> Github</a></h1>
    </div>
  );
};

export default Footer;