import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>RoamReady</a>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;