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
      <h2>Fine-tuned editorial expression with flexible expressive layouts</h2>

      <p>Using design tokens and layout configurations gives editors plenty of control over the expressiveness of the brand, and of each piece of content within it.</p>

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
