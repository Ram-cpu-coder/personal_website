import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("about");
  const technical = t("technical", { returnObjects: true });
  const soft = t("soft", { returnObjects: true });
  return (
    <div className="row w-100 p-2">
      <h2 className="h4 fw-bold mb-3 row">{t("skillsHeading")}</h2>
      <p>
        <strong>{t("TECHNICAL SKILLS:")}</strong>
        <ul>
          {technical.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <strong>{t("INTERPERSONAL SKILLS:")}</strong>
        <ul>
          {soft.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default Skills;
