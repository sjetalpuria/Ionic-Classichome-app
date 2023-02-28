import React, { useState } from 'react';
import { IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonHeader,IonImg,IonLabel,IonPage, IonRow, IonTextarea, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Login.css'; 
import Logo from '../images/Logo.png';

const Login: React.FC = () => {
  
  const [useremail, setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  function loginUser()
  {
    console.log(useremail,password)
  }
    return (
    <IonPage>
      <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo"></IonImg>   
      </IonHeader>

      <IonContent fullscreen>
        <div className='container'>
           <IonRow>
             <IonCol className='alignCenter' >
               <h1>Welcome Back</h1> 
               <p>
                 Please login to your account
               </p>
              </IonCol>
           </IonRow>
           
           <div className='form-container'>
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
          
          <IonRow  className='align-flex'>
            <IonCol size="auto">
               <IonCheckbox></IonCheckbox> 
            </IonCol>

            <IonCol>
               <span>Remember me</span>
            </IonCol>
          
            <IonCol>
             <a href='/forget-password'>Forgot Password?</a>           
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className='alignCenter'>
            <IonButton onClick={loginUser}>Login</IonButton>
            </IonCol>
          </IonRow>
          </div>
        </div>
                      
           
            <IonRow>
             <IonCol className='alignCenter margin-top'>
                <span>
                Don't have an account? 
                 <a href='/register'> Sign-up </a>
                </span>           
             </IonCol>
            </IonRow>
          
      </IonContent>
         
      <IonFooter className='footer'></IonFooter>

    </IonPage>
  );
};

export default Login;
