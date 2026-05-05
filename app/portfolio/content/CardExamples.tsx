import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
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
    <div>
      <h2>Multi-brand theming through design tokens</h2>
      <ParagraphWrapper>
        <p>Brand Identity JSON files act as the theming layer for shared components. Each brand can define its own color, typography, and decorative tokens while using the same component structure.</p> <p>The card examples show one component responding to different brand configurations. The system keeps the implementation consistent while letting each publication carry its own editorial tone.</p>
      </ParagraphWrapper>

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
    </div>
  )
}

export { CardExamples }
