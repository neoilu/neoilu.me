import type { Component } from 'solid-js';
import styles from './Games.module.css';

const Games: Component = () => {
  return (
  <>
  <p>ну тут игры будут</p>
  <nav>
    <a href="/">Home</a>
    <a href="/Games">ИГРЫ</a>
   </nav>
  </>
  );
};

export default Games;