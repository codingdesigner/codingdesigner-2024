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

      <p>With this innovative approach, users are empowered to manage each brand's design effortlessly through a "Brand Identity" JSON file. Despite variations in brand values, the uniform structure of these files ensures seamless compatibility across different brands. This unique system enables every component in our design framework to seamlessly adapt to the distinct identity of each brand without compromising on consistency or functionality.</p>

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
