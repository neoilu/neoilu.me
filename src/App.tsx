import type { Component } from 'solid-js';
import styles from './App.module.css';
import tgsvg from "./Vector.svg"
import tgcolor from "./Rectangle 7.png"

const App: Component = () => {
  return (
    <>
    <button class={styles.tgbutton}>
      <img src={tgsvg} class={styles.tgsvg}/>
      <img src={tgcolor} class={styles.tgcolor}/>
    </button>
    </>
  );
};

export default App;
