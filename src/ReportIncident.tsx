import React from "react";
import {IonButton,IonCol, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonGrid, IonCheckbox,} from "@ionic/react";
import './ReportIncident.css';

const ReportIncident: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Report Incident</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
           <IonRow>
             <IonCol>
              Report an Incident
               <p>
                  Choose the incident(s) you want to report
               </p>
              </IonCol>
            </IonRow>
        <IonGrid>
            <IonRow>
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol>Incident 1</IonCol>
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
        </IonGrid>               
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <IonRow>
            <IonButton href='/'>Submit</IonButton>
        </IonRow>
        </IonContent>
        <IonFooter className='footer'></IonFooter>
  
      </IonPage>
    );
};

export default ReportIncident;