import React, { useEffect, useState } from "react";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="row mb-4 p-2">
        <h1 className="text-black">{t("heading")}</h1>

        <p className="">{t("about")}</p>
      </div>
      {/* <WorkExperience /> */}
      <Education />
      <Skills />
    </div>
  );
};

export default About;
