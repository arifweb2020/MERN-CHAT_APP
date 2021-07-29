import React,{useState} from 'react';
import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import TextInput from '../../../../components/TextInput/TextInput';

function Phone() {

    const [phoneNumber,setPhoneNumber]=useState('');

    return (
        <Card title="Enter your phone number" icon="phn">

            <TextInput value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            <div>
             <div style={{marginTop:'40px'}}>
                <Button btntext="Next"   />
                 </div>

                 <p style={{color:'#fff',width:"70%" , margin:'0 auto',marginTop:'40px'}}>You can sign in with your phone number if you've added it to your Google Account.</p>
            </div>
                
                
            </Card>
       
    );
}

export default Phone;