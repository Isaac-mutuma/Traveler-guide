import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ setPage, currentPage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink} onClick={e => { e.preventDefault(); setPage('Home'); }}>RoamReady</a>
        </div>
        <Navigation setPage={setPage} currentPage={currentPage} />
      </div>
    </header>
  );
};

export default Header;