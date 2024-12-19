import type { Component } from 'solid-js';
import styles from './Home.module.css';

const Home: Component = () => {
  return (
  <>
   <h1>SOSINO</h1>
   <p>для леши</p>
   <nav>
    <ul>
        <li><a href="/"></a></li>
        <li><a href="/Games"></a></li>
    </ul>
  </nav>
  </>
  );
};

export default Home;
