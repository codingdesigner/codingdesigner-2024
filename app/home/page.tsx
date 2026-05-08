import React from "react"
import { DecoratedHeading } from "../components/DecoratedHeading"
import { Figure } from "../components/figure"
import { ParagraphWrapper } from "../components/ParagraphWrapper"
import { StripesWrapper } from "../components/StripesWrapper"

import styles from "./home.module.css"
import typography from "../components/typography/typography.module.css"

import gwenRedDress from "../static/gwendy/red-dress-1.png"

export default function HomePage() {
  return (
    <React.Fragment>

      <div className={styles.titleLockup}>
        <DecoratedHeading
          className={styles.homeHeading}
          background="page"
          text="mulberry"
          shadow="cyan">
          Design Systems • Tooling • UI Platforms
        </DecoratedHeading>

        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgCurve}
        >
          <path
            id="circlePath"
            d="
              M 10, 50
              a 40,40 0 1,1 80,0
              40,40 0 1,1 -80,0
              "
          />
          <text>
            <textPath href="#circlePath">
              Design Systems • Tooling • UI Platforms
            </textPath>
          </text>
        </svg>

        <Figure
          imageFile={gwenRedDress}
          altText="Gwendy Wendell in the woods, looking at the camera"
          modalImageFile={null}
          circleCrop={true}
          grayScale={false}
          className={styles.homeFigure}
        />
      </div>


      <h1 className={typography.leadInColor}>
        Large systems. Distinct brands. Shared foundations.
      </h1>

      <StripesWrapper>
        <section>
          <h2>Selected Work</h2>
          <ParagraphWrapper>
            <ul>
              <li>
                <strong><a href="./portfolio">Verso — Condé Nast</a></strong>: Global design system used across 15+ publications.
              </li>
              <li>
                <strong>Astro Design System — Rocket Communications</strong>: Design tooling, Figma plugins, and component architecture.
              </li>
              <li>
                <strong>Sass Breakpoint</strong>: Responsive design library used across the Sass ecosystem.
              </li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <p className={typography.leadIn}>
            I build large design systems for complex platforms. At <strong><a href="./portfolio">Condé Nast</a></strong>, I helped architect <strong>Verso</strong>, a token-driven design system used across 15+ publications including Vogue, The New Yorker, WIRED, Bon Appétit, Pitchfork, and Vanity Fair.
          </p>
          <p className={typography.leadInColor}>
            I design the tokens, components, tooling, and workflows that let teams share a foundation without flattening each brand’s identity.
          </p>
          <ParagraphWrapper>
            <p>
              I build Figma plugins and design tooling that connect design systems to production code using tokens and JSON as a shared source of truth. I work in both Figma and the browser, translating design intent into resilient components and APIs.
            </p>
            <p>
              I also contribute to the design and front-end community through open-source tools, writing, speaking, and meetups. I’ve spoken about design systems, responsive architecture, and design in the browser.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Experience & Impact</h3>
          <ParagraphWrapper>
            <ul>
              <li>
                <strong>Lead Design Systems Engineer at Condé Nast</strong>: I helped architect Verso, a multi-brand design system for 15+ publications, with token-driven architecture, shared components, brand identity configuration, and design tooling.
              </li>
              <li>
                <strong>NBC</strong>: I led responsive front-end engineering for large-scale redesigns, including USA Network and Oxygen.
              </li>
              <li>
                <strong>Phase2</strong>: As the agency’s first designer/engineer, I designed and prototyped responsive web experiences for clients including the United Nations and Estée Lauder.
              </li>
              <li>
                <strong>Zivtech</strong>: As creative director, I directed UX and creative strategy, built front-end processes, and mentored designers working across design and code.
              </li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Design Systems</h3>
          <ParagraphWrapper>
            <p>
              I design systems architecture for UI platforms that need to scale across products, brands, and teams. That work includes design tokens, component libraries, multi-brand theming, documentation, adoption patterns, and tooling that keeps design and engineering aligned.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Let’s Connect</h3>
          <p>
            If your team needs a design systems engineer for UI platforms, multi-brand theming, design tooling, or design-to-code workflows, I’d love to talk.</p>
          <p>I’m also available for speaking on design systems, responsive architecture, and designing in the browser.
          </p>
        </section>
      </StripesWrapper>
    </React.Fragment>
  )
}
