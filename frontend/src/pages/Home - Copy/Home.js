import React from 'react';
import styles from './Home.module.css';
import {Link} from 'react-router-dom'
const Home = () =>{

   
    return (
        <div className={styles.cardwrapper}>
        <div className={styles.card}>
       <div className={styles.headingwrapper}>
       <img src="/images/logo.png" alt="logo" width="30"/>
       <h1 className={styles.heading}>welcome to Chathouse !!</h1>

           </div>

        <p className={styles.text}>Google Chat is an intelligent and secure communication and collaboration tool,
             built for teams. From ad-hoc messaging to topic-based workstream</p>

             <div>
                <button>
                    <span>Get Your Username</span>
                    <img src="/images/arrow.png" alt="arrow"/>
                </button>
                 </div>

                 <div>
                    <span>Have an invite text ?</span>
                     <Link to="/login">Sign in </Link>

                     </div>


        </div>
        </div>
    )
}

export default Home