import React,{useState} from 'react';
import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import TextInput from '../../../../components/TextInput/TextInput';

function Email() {
    const [email,setEmail]=useState('')
    return (
        <Card title="Enter your email " icon="mail">
            

<TextInput value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <div>
             <div style={{marginTop:'40px'}}>
                <Button btntext="Next"   />
                 </div>

                 <p style={{color:'#fff',width:"70%" , margin:'0 auto',marginTop:'40px'}}>You can sign in with your email if you've added it to your Google Account.</p>
            </div>
                
                

                
                
            </Card>
    );
}

export default Email;