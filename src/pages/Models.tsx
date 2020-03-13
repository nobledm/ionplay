import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonAvatar,
  IonLabel,
  IonImg,
  IonItem,
  IonPopover
} from "@ionic/react";
import "./Models.css";

const Models: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popImg, setPopImg] = useState("");
  const [popContent, setPopContent] = useState("");

  let items = [
    {
      title: "The Original",
      content:
        "Introduced 1929, this Twin-Lens Reflex camera was the company's first medium format device.",
      img: "/assets/img/original.jpg",
      alt: "The Original Rolleiflex"
    },
    {
      title: "Old Standard",
      content:
        "Originally just the 'Standard' until 1939. It introduced a frame counter that, while not automatic, allowed the photographer to reset the counter with a button after reaching the first frame.",
      img: "/assets/img/old-standard.jpg",
      alt: "Old Standard Rolleiflex"
    },
    {
      title: "Automat",
      content:
        "Introduced an automatic film counter. It won the Grand Prix award at the Paris World's Fair in 1937.",
      img: "/assets/img/automat.jpg",
      alt: "Rolleiflex Automat"
    },
    {
      title: "Rolleiflex 2.8E",
      content:
        "Including the flash synch from model 2.8A, the 2.8E was the first with a built in, uncoupled light meter option.",
      img: "/assets/img/2.8e.jpg",
      alt: "Rolleiflex 2.8E"
    },
    {
      title: "Rolleiflex T",
      content:
        "Came in an exciting new color: gray! The camera was most successful for it was more affordable to the public.",
      img: "/assets/img/rolleiflex-t.jpg",
      alt: "Rolleiflex T"
    },
    {
      title: "Wide Rolleiflex",
      content:
        "Used a 55m/f4.0 lens. Only 3600 were originally produced, 700 existing in 1990 according to a sale catalogue by Sotheby's auction house in London.",
      img: "/assets/img/wide.jpg",
      alt: "Wide Rolleiflex"
    },
    {
      title: "Rolleiflex SL66",
      content:
        "Rollei's first medium-format SLR camera. It was introduced in 1966.",
      img: "/assets/img/sl66.jpg",
      alt: "Rolleiflex SL66"
    },
    {
      title: "SL35 Series",
      content:
        "The SL35 was the first 35mm SLR produced by Rollei. It's a whole range of cameras developed and built from 1970 - 1990. The picture is of the SL350, which had an open-aperture metering versus the SL35's stop down light meter.",
      img: "/assets/img/sl350.jpg",
      alt: "Rolleiflex SL350"
    },
    {
      title: "Miniature Reproductions",
      content:
        "These are not true Rolleiflex cameras but are miniature reproductions of the TLR design. The original model, the MiniDigi, is discontued but retained the details of The Original but with the viewing lens being a dummy; replaced with digital technology.",
      img: "/assets/img/mini.jpg",
      alt: "Mini Rolleiflex"
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notable Models</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={e => setShowPopover(false)}
        >
          <div className="popHeader">
            <h3 className="popTitle">{popTitle}</h3>
            <img src={popImg} />
          </div>
          <p className="popContent">{popContent}</p>
        </IonPopover>

        <IonList>
          {items.map(item => {
            return (
              <IonItem
                onClick={() => {
                  setPopTitle(item.title);
                  setPopImg(item.img);
                  setPopContent(item.content);
                  setShowPopover(true);
                }}
              >
                <IonLabel>
                  <h2 className="labelTitle">{item.title}</h2>
                  <p>{item.content}</p>
                </IonLabel>

                <IonAvatar slot="end">
                  <IonImg src={item.img} alt={item.alt} />
                </IonAvatar>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Models;
