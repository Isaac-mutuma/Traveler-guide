import React, { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle navigation">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
        <li><a href="#" className={styles.navLink}>Home</a></li>
        <li><a href="#" className={styles.navLink}>Products</a></li>
        <li><a href="#" className={styles.navLink}>About Us</a></li>
        <li><a href="#" className={styles.navLink}>Contact</a></li>
        <li><a href="#" className={styles.navLink}>Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;