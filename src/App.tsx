import type { Component } from 'solid-js';
import styles from './App.module.css';
import TelegramButton from './components/buttons/TelegramButton/TelegramButton';


const App: Component = () => {
  return (
    <> 
      <div class={styles.namediv}>
        <h1>
          Igor *****
        </h1>
      </div>
      <TelegramButton />
    </>
  );
};

export default App;
