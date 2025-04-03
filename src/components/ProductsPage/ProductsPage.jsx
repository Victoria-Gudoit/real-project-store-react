import React from "react";
import vannaya from "../../img/vannaya.jpg";
import kuchnia from "../../img/kuchnia.jpeg";
import podokonnik from "../../img/podokonnik.png";
import css from "../OurWorks/works.module.css";

const products = [
  {
    image: vannaya,
    title: "Столешницы из камня для ванной комнаты",
    subtitle:
      "Выбрать идеальную столешницу для ванной комнаты очень просто. Нужно понять какие есть возможности в изготовлении, какие цвета и фактуры камня больше всего подходят к материалам и отделке вашей кухни. Лучше вдохновится идеями самых разных проектов - искусственный камень даёт практически неограниченные возможности для дизайна.",
  },
  {
    image: kuchnia,
    title: "Столешницы из камня для кухни",
    subtitle:
      "Вы делаете ремонт и решили выбрать столешницу на кухню. Но вот с чего начать? Мы предлагаем простой пошаговый план действий, основанный на нашем многолетнем опыте и отзывах наших клиентов. Самое важное — потратьте время на планирование — это сохранит ваши нервы и деньги.",
  },
  {
    image: podokonnik,
    title: "Подоконники из камня",
    subtitle:
      "Какой бы материал вы ни выбрали – акриловый камень или кварцевый агломерат, в любом случае оконный проем с этим подоконником будет выглядеть роскошно, а многообразие цветовых решений и фактур, которые мы предлагаем, создадут пространство для вашего творчества и фантазии.",
  },


];

export const ProductsPage = () => {
  return (
    <div className={css.main}>
      <h1 className={css.title}>
        Найди новые идеи и вдохновись
      </h1>
      <div className={css.work}>
        {products.map((product) => (
          <div key={product.title} className={css.wrapper}>
            <img className={css.img} src={product.image} alt={product.title} />
            <h2 className={css.text}>{product.title}</h2>
            <p className={css.text}>{product.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
