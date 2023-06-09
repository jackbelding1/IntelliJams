import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./features.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import Link from "../components/link";
import LinkContainer from "../components/link-container";
import Section from "../components/section";
import Heading from "../components/heading";

export default function Features({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center banner bannerHeading>
        {heading}
      </Heading>
      <Heading secondary center banner>
        {secondaryHeading}
      </Heading>
      <div className={styles.content}>
        {content.map((item, i) => (
          <Feature
            {...item}
            orientation={i % 2 === 0 ? "default" : "reverse"}
          />
        ))}
      </div>
    </Section>
  );
}

function Feature({
  primaryText,
  secondaryText,
  links,
  orientation = "default",
}) {
  const orientationStyle = orientation === "default" ? "" : styles.reverse;

  return (
    <div className={`${styles.featureContainer} "default"`}>
      <div className={styles.copyColumn}>
        <div className={styles.copyContainer}>
          <MarkdownText
            as="h4"
            className={styles.primaryText}
            {...primaryText}
          />
          <MarkdownText className={styles.secondaryText} {...secondaryText} />
          <LinkContainer>
            {links && links.map((link) => <Link key={link.id} {...link} />)}
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}
