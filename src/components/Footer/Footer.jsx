import React from "react";
import css from "./footer.module.css";
import instagram from "../../img/instagram.svg";

export const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.contacts}>
          <p>+375 (29) 548-45-98</p>
          <p>infostone@mail.ru</p>
        </div>
        <img className={css.img} src={instagram} alt="instagram" />

        <div className={css.rights}>
          © 2025. All Rights Reserved. Design by VictoriaGud
        </div>
      </div>
    </div>
  );
};
