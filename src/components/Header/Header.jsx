import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import { MyButton } from "../UI/button";
import { Menu } from "../Menu";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "О нас", href: "/aboutUs" },
    { value: "Наши работы", href: "/ourWorks" },
    { value: "Контакты", href: "/contacts" },
  ];
  return (
    <div className={css.header}>
      <div className={css.burger} onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <ul className={css.list}>
        <Link className={css.logo} to={"/"}>
          Мастерская камня
        </Link>
        {items.map((item) => (
          <li className={css.items}>
            <Link to={item.href}>{item.value}</Link>
          </li>
        ))}
      </ul>
      <div className={css.btns}>
        <MyButton to="/materials">Материалы</MyButton>
        <MyButton to="/products">Изделия</MyButton>
      </div>

      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Мастерская камня"}
        items={items}
      />
    </div>
  );
};
