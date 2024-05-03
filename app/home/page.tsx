import React from "react"
import { DecoratedHeading } from "../components/DecoratedHeading"
import { Figure } from "../components/figure"
import { ParagraphWrapper } from "../components/ParagraphWrapper"
import { StripesWrapper } from "../components/StripesWrapper"

import styles from "./home.module.css"

import gwenGoodLight from "../static/gwendy/gwendy-good-light.png"

export default function HomePage() {
  return (
    <React.Fragment>
      <DecoratedHeading className={styles.homeHeading} background="peach">Design Systems for Big Needs</DecoratedHeading>
      <Figure
        imageFile={gwenGoodLight}
        altText="Gwendy Wendell looking at the camera"
        modalImageFile={null}
        circleCrop={true}
        grayScale={true}
      />

      <h2>Hello There!</h2>

      <StripesWrapper>
        <section>
          <h3>About Me</h3>
          <ParagraphWrapper>
            <p>
              I've spent over two decades in the web design field, but my true passion lies in developing large, impactful design systems. I've had the privilege of leading projects for prestigious brands like Condé Nast, utilizing my core skills in Responsive Web Design, UX and Visual Design, CSS, Sass, and React. These skills have been essential in bringing numerous sophisticated websites to life.
            </p>
            <p>
              From the start of my career, I’ve been deeply involved in community-building, leading meetups focused on Sass and design in Philadelphia. I love contributing to the community and have developed tools like Breakpoint and co-created Sassy Modular Scale. I’ve also shared my knowledge through numerous articles for The Sass Way.
            </p>
            <p>
              Public speaking is another one of my joys—I regularly discuss how creative visions can be seamlessly integrated with technical executions in web design. I do most of my design work directly in the browser, turning CSS into a playground of creative possibilities.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Experience & Impact</h3>
          <ParagraphWrapper>
            <ul>
              <li><strong>Lead Design Systems Engineer at Condé Nast:</strong> Here, I’ve really focused on crafting and refining robust design systems that solve complex brand challenges on a global scale.</li>
              <li><strong>Coding Designer LLC:</strong> I led responsive web design projects, delivering top-tier results for major clients like USA Network and Oxygen Network.</li>
              <li><strong>Zivtech:</strong> As the creative lead, I steered strategy, mentored incredible teams, and rolled out designs that truly make a user’s experience better.</li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Core Specialties</h3>
          <ParagraphWrapper>
            <p>
              I specialize in making web interfaces both beautiful and practical, with particular expertise in Responsive Web Design, UX and Visual Design, Leading Design System Projects, CSS3, HTML5, JavaScript, Art Direction, and Graphic Design. I love bringing designs to life right in the browser where I can tweak and perfect them in real time.
            </p>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Selected Projects Highlight</h3>
          <ParagraphWrapper>
            <p>I'm proud of every project I've touched, especially:</p>
            <ul>
              <li><strong>SCORE.org redesign:</strong> I revamped their website to reflect the personal connections at the heart of their service.</li>
              <li><strong>Innovative design systems for Condé Nast and UN ReliefWeb:</strong> Here, I led the creation of design systems that not only looked good but also facilitated better user navigation during crises.</li>
              <li><strong>Brand revamps for Esteelauder.com and MAC Cosmetics:</strong> I directed the responsive design strategies that revamped their online presence, making it sleeker and more user-friendly.</li>
            </ul>
          </ParagraphWrapper>
        </section>
        <section>
          <h3>Let's Connect</h3>
          <ParagraphWrapper>
            <p>
              If you think my skills and experiences might be what your project needs, or if you're on the lookout for a speaker who mixes practical expertise with a dash of creative flair, please do reach out. I’d love to collaborate with you to create something visually stunning and supremely functional. Let’s make something great together!
            </p>
          </ParagraphWrapper>
        </section>
      </StripesWrapper>
    </React.Fragment>
  )
}
