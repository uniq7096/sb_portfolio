import React, { useRef } from "react";
import useAppContext from "../../context/useContext";
import WithParallaxWrapper from "../../hocs/WithParallaxWrapper";

import { InView } from "react-intersection-observer";

import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Cover } from "../Cover";
import { TypeWriter } from "../TypeWriter";
import { BsFillCursorFill } from "react-icons/bs";

import ContactImg from "../../assets/contact.webp";

const Title = ({ offset }) => {
  const titleRef = useRef();
  const { setActiveCard, contentRefs, scroll, setIsTitleInView } =
    useAppContext();

  return (
    <InView
      threshold={0.5}
      onChange={(inView) => inView && setActiveCard(offset)}
      ref={contentRefs.title}
    >
      {({ inView, ref }) => {
        setIsTitleInView(inView);
        return (
          <Cover className="title" image={ContactImg.src}>
            <section className="title__overlay" ref={ref} />
            <section className="title__content" ref={titleRef}>
              <h1>Bohdan Savchenko</h1>
              <TypeWriter
                words={[
                  "Full Stack Software Engineer.",
                  "React/Next/Gatsby Expert.",
                  "Node.js/Express Backend Engineer.",
                ]}
                level={2}
              />
              <p>
                I&apos;m a <strong>Full Stack Software Engineer</strong> with 6+
                years of professional development experience architecting (and
                occasionally designing) scalable JavaScript powered
                applications. Currently, I’m committed to building accessible,
                user-focused experiences at Zumbat.
              </p>
              <Anchor href="/resume.pdf">
                <Button type="primary" icon={<BsFillCursorFill />}>
                  Download My Resume
                </Button>
              </Anchor>
            </section>
          </Cover>
        );
      }}
    </InView>
  );
};

const WithTitleWrapped = WithParallaxWrapper(Title);

export default WithTitleWrapped;
