import React,{useState} from 'react';
import Otp from '../steps/Otp/Otp';
import PhoneEmail from '../steps/PhoneEmail/PhoneEmail';


const steps  = {

    1:PhoneEmail,
    2:Otp,
    

};

function Login() {
    const [step,setStep]= useState(1)
    const Mystep = steps[step]

    function Next(){
        setStep(step + 1)
    }

    return (
        <div>

            <h1>Login Page </h1>
            <Mystep onNext={Next}/>
        </div>
    );
}

export default Login;