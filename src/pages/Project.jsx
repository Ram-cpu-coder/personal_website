import React from "react";
import ProjectCard from "../components/card/ProjectCard";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation("projects");
  return (
    <div className="w-100 ">
      <h1 className="row  mb-3 p-2">{t("heading")}</h1>
      {/* <div className="row"> */}
      <div>
        {/* {projectsList.map((item, index) => {
          return <ProjectCard item={item} key={index} index={index} />;
        })} */}
        Coming soon ...
      </div>
    </div>
  );
};

export default Project;
