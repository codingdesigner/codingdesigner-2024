import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { Figure } from "../components/figure";

import gwenFace from "../static/about/gwen-face.png"
import gwenLookUp from "../static/about/gwen-look-up.png"

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="lavender">Hi, I‘m Gwendy.</DecoratedHeading>

      <ParagraphWrapper>
        <Figure
          imageFile={gwenFace}
          altText="Gwendy Wendell looking at the camera"
          caption="Let‘s work together"
          modalImageFile={null}
          centerFigure={true}
        />

        <p>Over the past two decades, my career has evolved through various roles including designer, developer, creative director, front-end architect, design systems specialist, and even a featured conference speaker. My experiences have also allowed me the opportunity to lead as a manager and guide as a mentor.</p>

        <p>Most recently, I‘ve taken on the role of pioneering design systems that cater to the expansive needs of global brands. This role perfectly amalgamates my expertise in engineering, creative design, and team management, ensuring that each project not only meets but exceeds expectations.</p>

        <p>I reside in the picturesque Germantown neighborhood of Philadelphia, PA, where I live with my teenager. We‘re lucky to be situated next to a stunning park that offers miles of trails—an idyllic setting that lets me balance my love of the city and my need to be out in nature. Before my current professional life, I toured as a musician in punk and jazz bands, and my passion for music continues with my avid collection of vinyl records. These records often serve as a soundtrack to my workday. Outside of work, my time is spent enjoying the company of friends and family and actively advocating for LGBTQIA issues.</p>

        <p>This blend of professional fulfillment and personal happiness truly motivates me in all aspects of my life.</p>

        <Figure
          imageFile={gwenLookUp}
          altText="Gwendy Wendell looking away from the camera"
          caption="Oh look, a bird"
          modalImageFile={null}
          centerFigure={true}
        />
      </ParagraphWrapper>


    </React.Fragment>
  );
}

export default Page;
