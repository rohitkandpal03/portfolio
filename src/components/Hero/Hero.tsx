import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => (
  <section className={styles.hero} id="home">
    <div className={styles.heroContent}>
      <div className={styles.heroText}>
        <h1 className={styles.name}>
          Rohit Kandpal <span className={styles.wave}>👋</span>
        </h1>
        <h2 className={styles.title}>Senior Software Engineer</h2>
        <p className={styles.intro}>
          I’m a passionate Senior Software Engineer dedicated to creating
          engaging and intuitive web experiences. With a strong foundation in
          React.js, Next.js, and a continuously evolving skill set, I excel at
          building innovative, efficient, and scalable solutions. Beyond coding,
          I lead by example—conducting thorough code reviews, mentoring junior
          developers, and fostering best practices that elevate team
          performance. My goal is to deliver high-quality products while
          inspiring and enabling teams to craft extraordinary solutions
          together.
        </p>
        <div className={styles.heroActions}>
          <a href="#contact" className={styles.sayHelloBtn}>
            Say Hello
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "0.5rem" }}
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/rohitkandpal03"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
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
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kandpal-903960153"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:rohitkandpal125@gmail.com"
            className={styles.socialIcon}
            aria-label="Email"
          >
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.heroImgContainer}>
        <div className={styles.heroImgWrap}>
          <img
            src={`${import.meta.env.BASE_URL}docs/Rohit Kandpal.jpg`}
            alt="Rohit Kandpal"
            className={styles.heroImg}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
