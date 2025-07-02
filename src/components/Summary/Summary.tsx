import React from "react";
import styles from "./Summary.module.css";

const Summary: React.FC = () => (
  <section className={styles.summary}>
    <h2>About Me</h2>
    <p>
      I am a passionate Software Developer with 5 years of experience building
      scalable web applications and delivering high-quality solutions. My
      expertise spans frontend and backend technologies, and I thrive in
      collaborative, agile environments. I love solving complex problems and
      continuously learning new tools and frameworks.
    </p>
  </section>
);

export default Summary;
