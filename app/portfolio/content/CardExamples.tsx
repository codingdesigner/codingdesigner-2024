import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import brandlessCard from "../../static/cards/card-brandless.png";
import notVogueCard from "../../static/cards/card-not-vogue.png";
import notNewYorkerCard from "../../static/cards/card-not-new-yorker.png";
import notThemCard from "../../static/cards/card-not-them.png";

import brandlessCard2x from "../../static/cards/card-brandless@2x.png";
import notVogueCard2x from "../../static/cards/card-not-vogue@2x.png";
import notNewYorkerCard2x from "../../static/cards/card-not-new-yorker@2x.png";
import notThemCard2x from "../../static/cards/card-not-them@2x.png";

const CardExamples = () => {
  return (
    <React.Fragment>
      <h2>Multi-brand theming through design tokens</h2>
      <p>Each brand's design is controled via a "Brand Identity", allowing for any component in the design system to work with every brand.</p>

      <FigureGallery
        items={[
          {
            imageFile: brandlessCard,
            altText: "brandless card",
            caption: "A brandless/white label card",
            modalImageFile: brandlessCard2x,
          },
          {
            imageFile: notVogueCard,
            altText: "not Vogue card",
            caption: "A card from a fashion brand",
            modalImageFile: notVogueCard2x,
          },
          {
            imageFile: notNewYorkerCard,
            altText: "not The New Yorker card",
            caption: "A card from a news and literary brand",
            modalImageFile: notNewYorkerCard2x,
          },
          {
            imageFile: notThemCard,
            altText: "not Them.us card",
            caption: "A card from an LGBTQIA news brand",
            modalImageFile: notThemCard2x,
          },
        ]}
      />
    </React.Fragment>
  )
}

export { CardExamples }
