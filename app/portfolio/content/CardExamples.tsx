import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import brandlessCard from "../../static/cards/card-brandless.png";
import notVogueCard from "../../static/cards/card-not-vogue.png";
import notNewYorkerCard from "../../static/cards/card-not-new-yorker.png";
import notThemCard from "../../static/cards/card-not-them.png";

const CardExamples = () => {
  return (
    <React.Fragment>
      <h2>Multi-brand theming through design tokens</h2>
      <p>Each brand's design is controled via a "Brand Identity", allowing for any component in the design system to work with every brand.</p>

      <FigureGallery
        items={[
          {
            file: brandlessCard,
            altText: "brandless card",
            caption: "A brandless/white label card",
          },
          {
            file: notVogueCard,
            altText: "not Vogue card",
            caption: "A card from a fashion brand",
          },
          {
            file: notNewYorkerCard,
            altText: "not The New Yorker card",
            caption: "A card from a news and literary brand",
          },
          {
            file: notThemCard,
            altText: "not Them.us cardnot Them.us card",
            caption: "A card from an LGBTQIA news brand",
          },
        ]}
      />
    </React.Fragment>
  )
}

export { CardExamples }
