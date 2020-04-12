import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Corona Virus is, unfortunately, spreading through the entire world. What
        can we, as developers, do to make the situation better? We can help to
        spread awareness by visualizing the data.
      </p>
      <p>
        <strong>Site is Created By</strong>: Vikram Singh Rajpurohit
      </p>
    </div>
  );
}

export default Footer;
