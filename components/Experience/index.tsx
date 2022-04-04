/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import WithParallaxWrapped from "../Container";

import { Carousel } from "../Carousel";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { experienceData } from "./data";

import { AiTwotoneCalendar } from "react-icons/ai";

import justcoded from "../../assets/justcoded.png";
import kernix from "../../assets/kernix.png";
import zumbat from "../../assets/zumbat.jpg";

export const Experience = () => {
  const indicators = [
    { id: 0, label: "ZUMBAT", image: zumbat },
    { id: 1, label: "KERNIX", image: kernix },
    { id: 2, label: "JUSTCODED", image: justcoded },
  ];
  const [active, setActive] = useState(0);

  return (
    <WithParallaxWrapped id="experience" offset={3}>
      <Card title="Experience" className="card--bulleted">
        <div className="experience__grid">
          {experienceData.map(
            (experience, index) =>
              active === index && (
                <div className="experience__section" key={experience.id}>
                  <div className="experience__details">
                    <h4>
                      {`${experience.role} | `}
                      <span>{`${experience.company}`}</span>
                    </h4>
                    <Tag icon={<AiTwotoneCalendar />} title={experience.date} />
                  </div>
                  <ul className="experience__list">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li className="experience__item" key={index}>
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
          )}
          <Carousel
            indicators={indicators}
            active={active}
            setActive={setActive}
          />
        </div>
      </Card>
    </WithParallaxWrapped>
  );
};
