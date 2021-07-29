import React from 'react';
import styles from './Button.module.css'
function Button({btntext,myClick}) {
    return (
        <button className={styles.button} onClick={myClick}>
                    <span>{btntext}</span>
                    <img src="/images/arrow.png" alt="arrow" className={styles.arrow}/>
                </button>
    );
}

export default Button;