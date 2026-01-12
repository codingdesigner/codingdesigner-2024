import React from "react"
import { DecoratedHeading } from "../components/DecoratedHeading"
import { Figure } from "../components/figure"
import { ParagraphWrapper } from "../components/ParagraphWrapper"
import { StripesWrapper } from "../components/StripesWrapper"

import styles from "./home.module.css"
import typography from "../components/typography/typography.module.css"

import gwenGoodLight from "../static/gwendy/red-dress-1.png"

export default function HomePage() {
  return (
    <React.Fragment>

      <div className={styles.titleLockup}>
        <DecoratedHeading
          className={styles.homeHeading}
          background="page"
          text="mulberry"
          shadow="cyan">
          Design Systems for Big&nbsp;Needs
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
              • Design Systems for Big Needs •
            </textPath>
          </text>
        </svg>

        <Figure
          imageFile={gwenGoodLight}
          altText="Gwendy Wendell in the woods, looking at the camera"
          modalImageFile={null}
          circleCrop={true}
          grayScale={false}
          className={styles.homeFigure}
        />
      </div>


      <h1 className={typography.leadInColor}>
        I love tackling the big juicy design system challenges.
      </h1>

      <StripesWrapper>
        <section>
          <p className={typography.leadIn}>
            I’ve spent over two decades doing all aspects of web design and development, leading to my focus and passion in developing <strong>large, impactful design systems.</strong> I’ve had the privilege of leading projects for prestigious brands like <strong><a href="./portfolio">Condé Nast</a> and NBC</strong>, utilizing my core skills in Leadership and mentoring, UX, Visual and Responsive Design, CSS, Sass, and React. These skills and experiences have been essential in bringing some of the world’s best known websites to life.
          </p>
          <p className={typography.leadInColor}>
            My approach is holistic, blending creativity with technical expertise to deliver solutions that are not only visually stunning but also highly functional and user-centric.
          </p>
          <ParagraphWrapper>
            <p>
              Creating cohesive, scalable systems that not only look great but also function seamlessly across diverse platforms and user needs is what drives me. From the start of my career, I’ve been deeply involved in community-building, leading meetups focused on Sass and design in Philadelphia and New York. I love contributing to the community and have developed tools like <strong>Sass Breakpoint</strong> and co-created <strong>Sassy Modular Scale</strong>. 
            </p>
            <p>
              Public speaking is another one of my joys &mdash; I like to discuss how creative visions can be seamlessly integrated with technical executions in web design. I do most of my design work directly in the browser, turning CSS into a playground of creative possibilities.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Experience & Impact</h3>
          <ParagraphWrapper>
            <ul>
              <li>
                <strong>Lead Design Systems Engineer at Condé Nast</strong>: For the last 7 years, I’ve really focused on crafting and refining robust design systems that solve complex brand challenges on a global scale, with brands like Vogue, The New Yorker, WIRED, Bon Appetit, Pitchfork, and Vanity Faire.
              </li>
              <li>
                <strong>NBC</strong>: I led responsive web engineering projects, delivering top-tier results for major clients like USA Network and Oxygen Network.
              </li>
              <li>
                <strong>Phase2</strong>: As the agency’s first designer/engineer, I was able to rapidly design and prototype designs for global clients like the United Nations and Estée Lauder.
              </li>
              <li>
                <strong>Zivtech</strong>: As the creative director, I steered strategy, mentored incredible teams, and rolled out designs that truly make a user’s experience better.
              </li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Design Systems</h3>
          <ParagraphWrapper>
            <p>
              I specialize in creating design systems that meet the needs of large organizations. Whether that’s a design agency needing to more efficiently deliver projects to many clients, or a global media company with household name brands, no challenge is too intimidating. Instead, these are the challenges that are the most exciting to dive into. I enjoy working with large and small focused teams, and revel in the thrill of seeing a big project meet the world.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Selected Projects Highlight</h3>
          <ParagraphWrapper>
            <p>I’m proud of every project I’ve touched, especially:</p>
            <ul>
              <li>
                <strong>
                  Innovative design system for Condé Nast</strong>: I initiated and helped lead the creation of the first global design system to unify all of the prestigeous and unique brands under the Condé Nast umbrella. <a href="./portfolio">Learn more.</a>
              </li>
              <li>
                <strong> New design system for UN ReliefWeb</strong>: Here, I led the creation of design systems that not only looked good but also facilitated better user navigation for aid workers during global crises.
              </li>
              <li>
                <strong>Brand revamps for Esteelauder.com and MAC Cosmetics</strong>: I directed the responsive design strategies that revamped their online presence, making it sleeker and more user-friendly.
              </li>
              <li>
                <strong>SCORE.org</strong>: I revamped their website to reflect the personal connections at the heart of their service, as well as creating a design system that let their many local branches look as professional as the national organization.
              </li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Let‘s Connect</h3>
          <p>
            If you think my skills and experiences might be what your organization needs, or if you’re on the lookout for a speaker who mixes practical expertise with a more than a dash of creative flair, please do reach out.</p>
          <p>I’d love to collaborate with you to create something visually stunning and supremely functional. Let’s make something great together!
          </p>
        </section>
      </StripesWrapper>
    </React.Fragment>
  )
}
