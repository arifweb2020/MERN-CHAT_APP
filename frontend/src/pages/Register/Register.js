import React,{useState} from 'react';
import Avatar from '../steps/Avatar/Avatar';
import Name from '../steps/Name/Name';
import Otp from '../steps/Otp/Otp';
import PhoneEmail from '../steps/PhoneEmail/PhoneEmail';
import Username from '../steps/Username/Username';
import styles from './Register.module.css';


const steps  = {

    1:PhoneEmail,
    2:Otp,
    3:Name,
    4:Avatar,
    5:Username

};


function Register() {

    const [step,setStep]= useState(1)
    const Mystep = steps[step]

    function Next(){
        setStep(step + 1)
    }

    return (
        <div>
           <h1>Register Page</h1> 
           <Mystep onNext={Next}/>
        </div>
    );
}

export default Register;