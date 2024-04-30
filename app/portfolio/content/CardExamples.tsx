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
    <React.Fragment>
      <h2>Multi-brand theming through design tokens</h2>
      <ParagraphWrapper>
        <p>Understanding the need for brands to maintain distinct identities yet operate under a singular corporate umbrella, I engineered a solution using "Brand Identity" JSON files. This system allows each brand at Condé Nast to have its own unique design elements, tailored through the JSON file, while sharing a common structural base.</p> <p>This approach not only simplifies brand differentiation but ensures that any component within our design system can connect flawlessly with different brands, enhancing both usability and brand coherence.</p>
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
    </React.Fragment>
  )
}

export { CardExamples }
