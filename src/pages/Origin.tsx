import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg
} from "@ionic/react";
import "./Origin.css";

const Origin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Rollei</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg src="/assets/img/office.jpg" alt="Rollei Braunschweig Office" />

        <IonGrid>
          <IonRow>
            <IonCol size="7" className="ion-padding-bottom">
              <span className="heading">Founders</span>
              Paul Franke, {<br />}
              Reinhold Heidecke
            </IonCol>

            <IonCol size="5">
              <span className="heading">Founded</span>
              Feb 1, 1920
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-bottom">
            <IonCol size="7">
              <span className="heading">Headquarters</span>
              Hamburg, Germany
              <span className="note">Formerly Braunschweig</span>
            </IonCol>
            <IonCol size="5">
              <span className="heading">Website</span>
              <a
                className="oceanTint"
                href="http://www.rollei.com/"
                target="_blank"
              >
                www.rollei.com
              </a>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <span className="heading">Overview</span>
              <p>
                Rollei was a German company that established a worldwide
                reputation with the Rolleiflex, a twin-lens reflex camera.
              </p>

              <p>
                The company changed its name and legal form many times. The
                frequent name-changes are an indication of a turbulent history.
                After the popularity of the twin lens reflex cameras declined,
                the Rolleiflex was supplemented with a variety of models. The
                company expanded its production facilities and product range at
                the end of the 1960s beyond what a small company like Rollei
                could manage.
              </p>

              <p>
                In 2006, the headquarters of Rollei GmbH were moved to Berlin
                while production was transferred to Rollei Produktion GmbH,
                currently Franke &amp; Heidecke GmbH, in Braunschweig. The
                company underwent more radical restructuring in 2007/08.
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Origin;
