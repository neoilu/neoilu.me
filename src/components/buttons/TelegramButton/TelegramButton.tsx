import { Component, onCleanup, createEffect } from "solid-js"
import styles from "./styles.module.css"


const TelegramButton: Component = () => {
    let buttonRef: HTMLAnchorElement | undefined;
    let angle = 0;

    createEffect(() =>{
        const center_y = window.innerHeight /2;
        const center_x = window.innerWidth /2;
        const radius_y = 200 - window.innerHeight / 100;
        const radius_x = 600 - window.innerWidth / 100;

        const UpdatePos = () => {
            if (buttonRef) {
                const x = center_x + radius_x * Math.cos(-angle) - 100 / 2;
                const y = center_y + radius_y * Math.sin(-angle) - 100 / 2;

                buttonRef.style.left = `${x}px`;
                buttonRef.style.top = `${y}px`;
            }

            angle += 0.007;

            requestAnimationFrame(UpdatePos);

        }

        UpdatePos();

    });

    return (
        <a ref={buttonRef} class={styles.button} href="https://t.me/neoilu"></a>
    );
}

export default TelegramButton;