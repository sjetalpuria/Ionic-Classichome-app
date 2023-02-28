import React from "react";
import {IonButton,IonCol, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonGrid, IonCheckbox, IonImg, IonInput,} from "@ionic/react";
import './ReportIncident.css';
import Logo from '../images/Logo.png';
import Menu from '../images/menu.png';

const ReportIncident: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>          
          <IonImg src={Logo} alt="Classic Home Logo" className="logo-size"></IonImg>  
         <IonImg src={Menu} alt="Hamburger" className="menu"></IonImg>         
        </IonHeader>
        <IonContent fullscreen>
         <div className='res_container'>
           <IonRow>
             <IonCol>
              <h3>Report an Incident</h3> 
               <span>
                  Choose the incident(s) you want to report
               </span>
              </IonCol>
            </IonRow>
        <IonGrid>
        <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 1</span></IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 2</span></IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 3</span></IonCol>
            </IonRow>
        </IonGrid>   

        <IonGrid>
        <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 4</span></IonCol>
            </IonRow>
        </IonGrid>       

        <IonGrid>
        <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 5</span></IonCol>
            </IonRow>
        </IonGrid>   

         <IonGrid>
         <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 6</span></IonCol>
            </IonRow>
        </IonGrid>       

         <IonGrid>
         <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 7</span></IonCol>
            </IonRow>
        </IonGrid>       

        <IonGrid>
            <IonRow  className='align-flex nunito'> 
             <IonCol size="auto"><IonCheckbox></IonCheckbox></IonCol>
             <IonCol><span>Incident 8</span></IonCol>
            </IonRow>
        </IonGrid>    

        <IonRow>
            <IonCol>
                <span>Please upload an Image</span>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <span>Please add a Description</span>
               
            </IonCol>
        </IonRow>
       </div>
        
        <IonRow>
        <IonCol className='alignCenter submit'>
            <IonButton href='/'>Submit</IonButton>
        </IonCol>
        </IonRow>
        </IonContent>
        <IonFooter className='footer'></IonFooter>
  
      </IonPage>
    );
};

export default ReportIncident;