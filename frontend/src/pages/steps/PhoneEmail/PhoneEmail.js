import React,{useState} from 'react';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import styles from './PhoneEmail.module.css'


const phoneEmailMap = {

    phone:Phone,
    email:Email,
}

function PhoneEmail({onNext}) {
    const [type,setType]= useState("phone")
    const Component = phoneEmailMap[type]

    function Next(){
        
    }

    return (
        <>

        <div className={styles.cardWrapper}>
            <div>
            <div className={styles.buttonWrap}>
            <button className={`${styles.tabbutton} 
            ${type==='phone' ? styles.active : ''}
            
            `} onClick={()=>setType('phone')}>
                <img src='/images/w-phn.png' />
            </button>
        <button className={`${styles.tabbutton} 
            ${type==='email' ? styles.active : ''}
            
            `} onClick={()=>setType('email')}>
        <img src='/images/mail.png' />
        </button>
                </div>
                <Component onNext={Next}/>

                </div>
            </div>
        
            
            
        </>
    );
}

export default PhoneEmail;