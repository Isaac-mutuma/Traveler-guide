import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation'; 
import Footer from './components/Footer/Footer'; 
import cardData from './data/cardData';
import styles from './App.module.css'; 

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Navigation /> 

      <main className={styles.mainContent}>
        <div className={styles.container}> {/* Global container for centering */}
          <h1 className={styles.sectionTitle}>Our Sustainable Products</h1>
          <section className={styles.cardGrid}>
            {cardData.map(card => (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;