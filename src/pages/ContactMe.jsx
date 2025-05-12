import React from "react";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation("contact");
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "60vh" }}
    >
      <strong className=" fs-1">{t("heading")}</strong>
      <div className=" text-center fs-3">
        {t("paragraph1")} &nbsp;
        <a
          href="mailto:ramkumardhimal2058@gmail.com"
          className="text-decoration-none"
        >
          {t("paragraph2")}
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
