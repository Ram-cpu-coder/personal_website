import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation("about");
  return (
    <div className="row w-100 p-2">
      <h2 className="h4 fw-bold mb-3 row">Education</h2>
    </div>
  );
};

export default Education;
