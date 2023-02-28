import React, { useState } from 'react';
import {IonButton, IonCol, IonContent, IonFooter, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonTextarea} from "@ionic/react";
import './Register.css';
import Logo from '../images/Logo.png';

const Register: React.FC = () => {
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [phone,setPhone] = useState('');
  const [useremail, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCPassword] = useState('');
  function registerUser()
  {
    console.log(firstname,lastname,phone,useremail,password,cpassword)
  }
    return (
        <IonPage>
         <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo"></IonImg>   
      </IonHeader>

        <IonContent fullscreen>
        <div className='res_container'>
             <IonRow>
               <IonCol className='alignCenter'>
                 <h1>Welcome</h1>
                 <p>
                 Create your account
                 </p>
                </IonCol>
             </IonRow>
             
             <div className='form-container'>
             <IonRow>
               <IonCol>   
                 <IonLabel> First Name</IonLabel>         
                 <IonTextarea className="custom-textarea" placeholder="John" onIonChange={(e:any) => setFirstname(e.target.value)}></IonTextarea>
               </IonCol>                   
             </IonRow>

             <IonRow>
               <IonCol>   
                 <IonLabel> Last Name</IonLabel>         
                 <IonTextarea className="custom-textarea" placeholder="Stamos" onIonChange={(e:any) => setLastname(e.target.value)}></IonTextarea>
               </IonCol>                   
             </IonRow>

             <IonRow>
               <IonCol>   
                 <IonLabel> Phone no.</IonLabel>         
                 <IonTextarea className="custom-textarea" input-type="tel" placeholder="888-888-8888"onIonChange={(e:any) => setPhone(e.target.value)}></IonTextarea>
               </IonCol>                   
             </IonRow>
             
             <IonRow>
           <IonCol>   
               <IonLabel> Email</IonLabel>         
               <IonTextarea className="custom-textarea" placeholder="xyz@gmail.com" onIonChange={(e:any) => setEmail(e.target.value)}></IonTextarea>
             </IonCol>                  
           </IonRow>
          <IonRow>
            <IonCol>   
              <IonLabel> Password</IonLabel>         
               <IonTextarea className="custom-textarea" placeholder="8 characters" onIonChange={(e:any) => setPassword(e.target.value)}></IonTextarea>
            </IonCol>    
          </IonRow> 

            <IonRow>
              <IonCol>   
              <IonLabel> Re-enter Password</IonLabel>         
               <IonTextarea className="custom-textarea" placeholder="8 characters" onIonChange={(e:any) => setCPassword(e.target.value)}></IonTextarea>
              </IonCol>    
            </IonRow>                     
  
            <IonRow>
              <IonCol className='alignCenter'>
              <IonButton onClick={registerUser}>Sign-up</IonButton>
              </IonCol>
            </IonRow>
            </div>
          </div> 
                    
                        
            <IonRow>
             <IonCol className='alignCenter margin-top'>
                <span>
                 Already have an account?
                 <a href='/login'> Login </a>
                </span>           
             </IonCol>
            </IonRow>
        </IonContent>
        
            
            
        <IonFooter className='footer'>
        
        </IonFooter>
  
      </IonPage>
    );
};

export default Register;


