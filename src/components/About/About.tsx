import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => (
  <section className={styles.about} id="about">
    <h2 className="section-title">About Me</h2>
    <h3 className={styles.sectionSubtitle}>My Introduction</h3>
    <div className={styles.aboutContent}>
      <div className={styles.aboutImgContainer}>
        <img
          src="/docs/Rohit Kandpal.jpg"
          alt="Rohit Kandpal"
          className={styles.aboutImg}
        />
      </div>
      <div className={styles.aboutInfo}>
        <p className={styles.summary}>
          Hi! I am Rohit Kandpal, a Software Engineer passionate about building
          scalable and efficient applications. I specialize in frontend
          development and enjoy solving complex problems while working with
          modern technologies in collaborative environments.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardValue}>4+</span>
              <span className={styles.cardLabel}>Years Experience</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardValue}>5+</span>
              <span className={styles.cardLabel}>Projects</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardValue}>3</span>
              <span className={styles.cardLabel}>Companies</span>
            </div>
          </div>
        </div>
        <div className={styles.downloadContainer}>
          <a
            href="/docs/Rohit Kandpal.pdf"
            className={styles.downloadBtn}
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
