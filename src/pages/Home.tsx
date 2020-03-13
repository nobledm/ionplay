import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList
} from "@ionic/react";
import "./Home.css";
import {
  share,
  logoCodepen,
  logoGithub,
  logoReact,
  logoStackoverflow
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>The Rolleiflex</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="bg-img">
        <div className="fab-container">
          <IonFab horizontal="center" vertical="center">
            <IonFabButton color="ocean">
              <IonIcon icon={share} />
            </IonFabButton>

            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={logoCodepen} color="dark" />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="bottom">
              <IonFabButton>
                <IonIcon icon={logoGithub} color="dark" />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="start">
              <IonFabButton>
                <IonIcon icon={logoReact} color="secondary" />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={logoStackoverflow} class="dk-orange" />
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>ROLLEIFLEX</IonCardSubtitle>
            <IonCardTitle>4 inches of Pure Precision</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p className="mb-1">
              A long-running and diverse line of high-end cameras originally
              made by the German company: Franke &amp; Heidecke.
            </p>

            <p>
              The Rolleiflex TLR film cameras were notable for their exceptional
              build quality, compact size, modest weight, superior optics,
              durability, simplicity, reliable mechanics, and bright
              viewfinders.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
