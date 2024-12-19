import type { Component } from 'solid-js';
import styles from './Games.module.css';

const Games: Component = () => {
  return (
  <>
  <p>ну тут игры будут</p>
  <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Games">Games</a></li>
    </ul>
  </nav>
  </>
  );
};

export default Games;