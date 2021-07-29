import React from 'react';
import styles from './Home.module.css';
import {Link,useHistory} from 'react-router-dom'
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
const Home = () =>{
    const history = useHistory();
    const startReg = () =>{

        history.push('/authenticate')
            console.log('child to parent comp call')

    }
   
    return (
        <div className={styles.cardwrapper}>
            <Card title="welcome to Chathouse !!" icon="logo">

            <p className={styles.text}>Google Chat is an intelligent and secure communication and collaboration tool,
             built for teams. From ad-hoc messaging to topic-based workstream</p>

             <div>
                <Button btntext="Let's Go" myClick={startReg}  />
                 </div>

                 <div className={styles.signinwrapper}>
                    <span className={styles.invite}>Have an invite text ?</span>
                     {/* <Link to="/login" className={styles.mylink}>Sign in </Link> */}

                     </div>
                
            </Card>
       
        </div>
    )
}

export default Home