import React, { useState } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { name: 'Home' },
  { name: 'Products' },
  { name: 'About Us' },
  { name: 'Contact' },
  { name: 'Blog' },
];

const Navigation = ({ setPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (name, e) => {
    e.preventDefault();
    setPage(name);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
        {navItems.map(item => (
          <li key={item.name}>
            <a
              href="#"
              className={styles.navLink}
              style={{
                color: currentPage === item.name ? 'var(--color-secondary)' : undefined,
                fontWeight: currentPage === item.name ? 'bold' : undefined,
              }}
              onClick={e => handleNav(item.name, e)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;