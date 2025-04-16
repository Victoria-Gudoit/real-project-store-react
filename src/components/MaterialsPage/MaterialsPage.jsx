import React from "react";
import css from "../OurWorks/works.module.css";
import caesar from "../../img/caesar.jpg";
import technistone from "../../img/technistone.jpg";
import belenco from "../../img/belenco.jpg";

export const MaterialsPage = () => {
  const materials = [
    { image: caesar, title: "Caesarstone" },
    { image: technistone, title: "Technistone" },
    { image: belenco, title: "Belenco" },
    { image: caesar, title: "Silestone" },
    { image: technistone, title: "Vicostone" },
    { image: belenco, title: "Norda" },
  ];

  return (
    <section className={css.main}>
      <h1 className={css.title}>Кварц</h1>
      <div className={css.work}>
        {materials.map((material) => (
          <article key={material.title} className={css.wrapper}>
            <img
              className={css.img}
              src={material.image}
              alt={material.title}
            />
            <h2 className={css.text}>{material.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};
