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
      <h2>Enhancing Editorial Flexibility with Dynamic Layouts</h2>

      <ParagraphWrapper>
        <p>In this design system, I emphasize empowering editors through the strategic use of design tokens and adaptable layout configurations. This approach ensures that the control over the brand‘s narrative remains firmly in the hands of those who curate it—our editors. The system I developed provides unmatched flexibility, allowing editors to fine-tune the narrative tone and customize the presentation of content to meet their vision precisely.</p>

        <p>Whether editors are making subtle refinements or opting for more dramatic layout changes, the tools I‘ve integrated ensure each piece of content not only engages but also leaves a lasting impression on the audience. The result is a powerful platform that supports creative freedom while maintaining brand coherence across all mediums.</p></ParagraphWrapper>

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
