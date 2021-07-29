import React,{useState} from 'react';
import Otp from '../steps/Otp/Otp';
import PhoneEmail from '../steps/PhoneEmail/PhoneEmail';


const steps  = {

    1:PhoneEmail,
    2:Otp,
    

};

function Authenticate() {
    const [step,setStep]= useState(1)
    const Mystep = steps[step]

    function Next(){
        setStep(step + 1)
    }

    return (
        <div>

            
            <Mystep onNext={Next}/>
        </div>
    );
}

export default Authenticate;
