import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import newYorkerArticle from "../../static/articles/newyorker_half.png"
import pitchforkArticle from "../../static/articles/pitchfork_half.png"
import themArticle from "../../static/articles/them_half.png"
import vogueArticle from "../../static/articles/vogue_half.png"

import newYorkerArticle2x from "../../static/articles/newyorker_full.png"
import pitchforkArticle2x from "../../static/articles/pitchfork_full.png"
import themArticle2x from "../../static/articles/them_full.png"
import vogueArticle2x from "../../static/articles/vogue_full.png"

const EditorialExpression = () => {
  return (
    <React.Fragment>
      <h2>Crafting Fine-Tuned Editorial Expression with Flexible and Expressive Layouts</h2>

      <p>By leveraging design tokens and dynamic layout configurations, our design system places the power of editorial expression squarely in the hands of editors. This sophisticated system offers editors unparalleled control over the brand's narrative tone and allows for the seamless customization of each piece of content. Whether it's through subtle design tweaks or bold layout choices, our tool empowers editors to create engaging and impactful content that resonates with their audience.</p>

      <FigureGallery
        items={[
          {
            imageFile: newYorkerArticle,
            altText: "a screenshot of an article from The New Yorker",
            caption: "An article header from The New Yorker",
            modalImageFile: newYorkerArticle2x,
          },
          {
            imageFile: pitchforkArticle,
            altText: "a screenshot of an article from Pitchfork",
            caption: "An article header from Pitchfork",
            modalImageFile: pitchforkArticle2x,
          },
          {
            imageFile: themArticle,
            altText: "a screenshot of an article from them.us",
            caption: "An article header from them.us",
            modalImageFile: themArticle2x,
          },
          {
            imageFile: vogueArticle,
            altText: "a screenshot of an article from Vogue",
            caption: "An article header from Vogue",
            modalImageFile: vogueArticle2x,
          },
        ]}
      />
    </React.Fragment>
  )
}

export { EditorialExpression }
