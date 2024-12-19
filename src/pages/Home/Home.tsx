import type { Component } from 'solid-js';
import styles from './Home.module.css';

const Home: Component = () => {
  return (
  <>
   <h1>SOSINO</h1>
   <p>для леши</p>
   <nav style={styles.nav}>
    <a href="/">Home</a>
    <a href="/Games">Games</a>
   </nav>
  </>
  );
};

export default Home;
