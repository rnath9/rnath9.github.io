import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>About</Link>
        </li>
        <li>
          <Link to="/projects" className={styles.link}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;