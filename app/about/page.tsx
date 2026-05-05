import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { Figure } from "../components/figure";

import gwenAtDesk from "../static/about/pink-hair-at-desk.png"
import gwenOnStage from "../static/about/bass-on-stage.png"

export const metadata = {
  title: "About",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="lavender">Hi, I’m Gwendy.</DecoratedHeading>

      <ParagraphWrapper>
        <Figure
          imageFile={gwenAtDesk}
          altText="Gwendy Wendell in her office"
          caption="Let’s work together"
          modalImageFile={null}
          centerFigure={true}
        />

        <p>I’ve spent more than two decades working across design, front-end engineering, creative direction, and design systems. That path has made me comfortable moving between visual design, code, architecture, documentation, leadership, and mentoring.</p>

        <p>My current work centers on large design systems and UI platforms: tokens, components, tooling, and workflows that help teams build with a shared foundation. I like the practical middle space where a system has to serve real products, real brands, and real people trying to get work done.</p>

        <p>This page is the human layer behind that work. I live in Germantown, Philadelphia with my teenager, close to a park with miles of trails. It gives me the city I love and the trees I need.</p>

        <p>Before this professional life, I toured as a musician in punk and jazz bands. Music still runs through my days, usually through a stack of vinyl records near my desk. Away from work, I spend time with friends and family and advocate for LGBTQIA issues.</p>

        <Figure
          imageFile={gwenOnStage}
          altText="Gwendy Wendell looking away from the camera while playing bass on stage"
          caption="Playing bass on stage"
          modalImageFile={null}
          centerFigure={true}
        />
      </ParagraphWrapper>


    </React.Fragment>
  );
}

export default Page;
