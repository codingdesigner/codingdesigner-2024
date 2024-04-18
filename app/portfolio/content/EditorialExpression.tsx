import React from "react";

import { FigureGallery } from "../../components/FigureGallery";

import newYorkerArticle from "../../static/articles/newyorker_half.png"
import pitchforkArticle from "../../static/articles/pitchfork_half.png"
import themArticle from "../../static/articles/them_half.png"
import vogueArticle from "../../static/articles/vogue_half.png"

const EditorialExpression = () => {
  return (
    <React.Fragment>
      <h2>Fine-tuned editorial expression with flexible expressive layouts</h2>

      <p>Using design tokens and layout configurations gives editors plenty of control over the expressiveness of the brand, and of each piece of content within it.</p>

      <FigureGallery
        items={[
          {
            file: newYorkerArticle,
            altText: "a screenshot of an article from The New Yorker",
            caption: "An article header from The New Yorker",
          },
          {
            file: pitchforkArticle,
            altText: "a screenshot of an article from Pitchfork",
            caption: "An article header from Pitchfork",
          },
          {
            file: themArticle,
            altText: "a screenshot of an article from them.us",
            caption: "An article header from them.us",
          },
          {
            file: vogueArticle,
            altText: "a screenshot of an article from Vogue",
            caption: "An article header from Vogue",
          },
        ]}
      />
    </React.Fragment>
  )
}

export { EditorialExpression }
