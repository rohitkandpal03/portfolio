import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>Rohit</div>

        <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${styles.navbarLinks} ${
            mobileMenuOpen ? styles.active : ""
          }`}
        >
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li>
            <a href="#qualification" className={styles.navLink}>
              Qualification
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
