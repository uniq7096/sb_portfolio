import React, { FC } from "react";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import { PageHeader } from "../PageHeader";
import { CardProps } from "../../models/card";

export const Card: FC<CardProps> = ({
  className = "",
  children,
  showArrow = true,
  title,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const modifiers = {
    arrow: "card--arrow",
    animate: "card--animate-in",
  };

  const cardArrow = showArrow ? modifiers.arrow : "";
  const cardAnimation = inView ? modifiers.animate : "";
  const cardClass = `card ${className} ${cardArrow}`;
  const cardTitle = title && (
    <PageHeader className="card__title" level={3}>
      {title}
    </PageHeader>
  );

  const cardContent = children && (
    <div className="card__container">
      <div className="card__content">
        {cardTitle}
        {children}
      </div>
    </div>
  );

  return (
    <section className={`${cardClass} ${className} ${cardAnimation}`} ref={ref}>
      {cardContent}
    </section>
  );
};
