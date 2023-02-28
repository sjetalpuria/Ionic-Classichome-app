import React from "react";
import {IonCol, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonGrid, IonCheckbox, IonImg,} from "@ionic/react";
import './Confirmation.css';
import Logo from '../images/Logo.png';
import  Checkmark from '../images/Checkmark.png';

const Confirmation: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo" className="logo-size"></IonImg>          
      </IonHeader>
        <IonContent fullscreen>
        <div id="container_bg">
            <IonRow className='flex'>
                <IonCol className='alignCenter'>
                <IonImg src={Checkmark} alt="Confirmation" id="check-mark"></IonImg>  
                 <p className='container-success'>Reset Password link Sent!</p>
                </IonCol>              
            </IonRow>
        </div>
        </IonContent>

        <IonFooter className='footer'></IonFooter>
  
      </IonPage>
    );
};

export default Confirmation;