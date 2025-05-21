import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href={link} className={styles.cardLink}>Learn More</a>
      </div>
    </div>
  );
};

export default Card;