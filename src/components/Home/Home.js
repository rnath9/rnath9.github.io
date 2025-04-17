import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  const subtitles = [
    'a software engineer interested in building scalable infrastructure.',
    'going to add more to this in future!'
  ];

  const changeSubtitle = () => {
    setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.name}>Hi, I'm Rahul!</h1>
      <p className={styles.subtitle}>
        I'm {' '}
        <span className={styles.clickableSubtitle} onClick={changeSubtitle}>
          {subtitles[currentSubtitleIndex]}
        </span>
      </p>
    </div>      
  );
};

export default Home;
