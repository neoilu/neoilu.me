import type { Component } from 'solid-js';
import styles from './Games.module.css';

const Games: Component = () => {
  return (
  <>
  <p>ну тут игры будут</p>
  <nav style={styles.nav}>
    <a href="/">Home</a>
    <a href="/Games">Games</a>
   </nav>
  </>
  );
};

export default Games;