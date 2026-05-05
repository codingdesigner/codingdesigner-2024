import React from "react";

import { ParagraphWrapper } from "../../components/ParagraphWrapper";
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
    <div>
      <h2>Editorial expression through layout options</h2>

      <ParagraphWrapper>
        <p>Verso supports editorial variation through layout options and brand tokens. Article headers can shift tone across publications while staying inside the same system architecture.</p>

        <p>The examples show how different brands can use composition, typography, color, and decorative details to shape the reading experience. The system gives teams room for editorial expression without requiring a separate implementation for every brand.</p></ParagraphWrapper>

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
    </div>
  )
}

export { EditorialExpression }
