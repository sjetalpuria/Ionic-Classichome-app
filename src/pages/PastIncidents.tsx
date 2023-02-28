import React from "react";
import {IonButton,IonCol, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonGrid, IonCheckbox, IonImg,} from "@ionic/react";
import './PastIncidents.css';
import Logo from '../images/Logo.png';
import Menu from '../images/menu.png';

const PastIncidents: React.FC = () => {
    return (
        <IonPage>
       <IonHeader>        
        <IonImg src={Logo} alt="Classic Home Logo" className="logo-size"></IonImg>  
        <IonImg src={Menu} alt="Hamburger" className="menu"></IonImg>
      </IonHeader>
        <IonContent fullscreen>
           <IonRow>
             <IonCol>
              <h1>Reported Incidents</h1>
               <span>
                 Here is the history of the Past Incidents 
               </span>
              </IonCol>
            </IonRow>
        {/* <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>No.</IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 2</IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 3</IonCol>
            </IonRow>
        </IonGrid>   

        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 4</IonCol>
            </IonRow>
        </IonGrid>       

        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 5</IonCol>
            </IonRow>
        </IonGrid>   

         <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 6</IonCol>
            </IonRow>
        </IonGrid>       

         <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 7</IonCol>
            </IonRow>
        </IonGrid>       

        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 8</IonCol>
            </IonRow>
        </IonGrid>                */}
       
        <IonRow>
            <IonButton href='/'>Submit</IonButton>
        </IonRow>
        </IonContent>
        <IonFooter className='footer'></IonFooter>
  
      </IonPage>
    );
};

export default PastIncidents;