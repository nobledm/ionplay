import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonTextarea,
  IonButton,
  IonCheckbox
} from "@ionic/react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>HAVE QUESTIONS?</IonCardSubtitle>
            <IonCardTitle>Contact Us</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Interested in more information? Have a question? Please contact us
            at any time using the form below. We'll get back to you as quickly
            as we can.
          </IonCardContent>
        </IonCard>

        <form onSubmit={e => e.preventDefault()}>
          <IonCard>
            <IonCardContent className="ion-no-padding">
              <IonList class="ion-no-padding">
                <IonItem>
                  <IonLabel position="stacked">
                    <IonText color="ocean">Name</IonText>
                  </IonLabel>
                  <IonInput required type="text" name="name" />
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">
                    <IonText color="ocean">Email</IonText>
                  </IonLabel>
                  <IonInput required type="email" name="email" />
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">
                    <IonText color="ocean">Message</IonText>
                  </IonLabel>
                  <IonTextarea required rows={4} name="message"></IonTextarea>
                </IonItem>

                <IonItem>
                  <IonCheckbox
                    color="ocean"
                    checked={checked}
                    onIonChange={e => setChecked(e.detail.checked)}
                  />
                  <IonLabel>
                    <span className="signUp">
                      Sign-up for Monthly Newsletter?
                    </span>
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>

          <IonButton
            expand="block"
            type="submit"
            color="ocean"
            class="ion-margin-horizontal ion-margin-bottom"
          >
            Submit Enquiry
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
