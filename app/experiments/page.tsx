import React from "react";
import { DecoratedHeading } from "../components/DecoratedHeading";
import { ParagraphWrapper } from "../components/ParagraphWrapper";
import { Figure } from "../components/figure";

import gwenFace from "../static/about/gwen-face.png"
import gwenLookUp from "../static/about/gwen-look-up.png"

export const metadata = {
  title: "About",
}

const Page = () => {
  return (
    <React.Fragment>
      <DecoratedHeading background="pink">Experiments</DecoratedHeading>

      <ParagraphWrapper>
        {/* content tktk */}
      </ParagraphWrapper>


    </React.Fragment>
  );
}

export default Page;
