import React from "react";
import {IonButton,IonCol, IonContent, IonFooter, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar} from "@ionic/react";
import './Dashboard.css';
import './ReportConfirmation.css';
import Logo from '../images/Logo.png';
import Menu from '../images/menu.png';
import  Checkmark from '../images/Checkmark.png';

const ConfirmationReport: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo" className="logo-size"></IonImg>  
        <IonImg src={Menu} alt="Hamburger" className="menu"></IonImg>
      </IonHeader>
        <IonContent fullscreen>
        <div className="confirmation_bg">
            <IonRow className='flex'>
                <IonCol className='alignCenter'>
                <IonImg src={Checkmark} alt="Confirmation" id="check-mark"></IonImg>  
                 <p className='container-success'>Thank you, your incident was reported</p>
                </IonCol>              
            </IonRow>
        </div>

        
         <div className='container_bg'id="margin-top">
            <IonRow>
                <IonCol className='alignCenter'>
                 <IonButton href="/report-incident">Report an Incident</IonButton>
                </IonCol>

                <IonCol className='alignCenter'>
                 <IonButton href="/past-incidents">View Reported Incidents</IonButton>
                </IonCol>              
            </IonRow>
            </div>
        </IonContent>

        <IonFooter className='footer'></IonFooter>
  
      </IonPage>
    );
};

export default ConfirmationReport;