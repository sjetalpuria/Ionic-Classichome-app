import { IonButton, IonCol, IonContent, IonFooter, IonHeader,IonImg,IonItem,IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './ForgetPassword.css';
import Logo from '../images/Logo.png';
import { useState } from 'react';

const ForgetPassword: React.FC = () => {
  const [useremail, setEmail] = useState('');
  function forgetPassword()
  {
    console.log(useremail)
  }
  return (
    <IonPage>
      <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo"></IonImg>   
      </IonHeader>

      <IonContent fullscreen>
       <div className='container'>
           <IonRow>
             <IonCol className='alignCenter'>
               <h3>Forgot Password</h3>
               <p>
                Enter your email to get a reset password link 
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
           </div>
          <IonRow>
            <IonCol className='alignCenter'>
            <IonButton onClick={forgetPassword}>Submit</IonButton>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
        
      <IonFooter className='footer'></IonFooter>

    </IonPage>
  );
};

export default ForgetPassword;
