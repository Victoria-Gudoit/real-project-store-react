import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import { MyButton } from "../UI/button";
import { Menu } from "../Menu";
import "../Menu/menu.css"
export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "О нас", href: "/aboutUs" },
    { value: "Наши работы", href: "/ourWorks" },
    { value: "Контакты", href: "/contacts" },
  ];

	// const handlerScrollUp = () => { const backToTop = document.getElementById("back-to-top");
	// 	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
   

	// 		window.scrollBy(0, -50);
	// 		setTimeout(handlerScrollUp, 10);  
  //       backToTop.style.display = "block";
	// 	} else {
  //       backToTop.style.display = "none";

  //   }
	// }
  // document.addEventListener("DOMContentLoaded", function () {
  //   const backToTop = document.getElementById("back-to-top");
  //   window.addEventListener("scroll", function () {
  //     if (window.pageYOffset > 300) {
  //       backToTop.style.display = "block";
  //     } else {
  //       backToTop.style.display = "none";
  //     }
  //   });
  //   backToTop.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // });


  return (
    <div className={css.header}>
      {/* <a href="#top" id={"back-to-top"} className="back-to-top" title="Back to top">▲</a> */}
      <div className={css.burger} onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <ul className={css.list}>
        <Link className={css.logo} to={"/"}>
          Мастерская
        </Link>
        {items.map((item) => (
          <li key={item.href} className={css.items}>
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
