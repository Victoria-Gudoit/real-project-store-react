import React from "react";
import css from "./works.module.css";
import workOne from "../../img/work-one.jpg";
import workTwo from "../../img/work-two.jpg";
import workThree from "../../img/work-three.jpg";

const works = [
  {
    image: workOne,
    title: "Столешница из камня для ванной комнаты",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",
  },
  {
    image: workTwo,
    title: "Столешница из камня для кухни",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },
  {
    image: workThree,
    title: "Подоконник из камня",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat tincidunt nunc laoreet porttitor. Etiam tristique eu ipsum eu mollis. Phasellus gravida urna est, in aliquam arcu varius a. Quisque a sapien eget felis elementum porttitor in eget erat. Nulla odio massa, dapibus ut vehicula euismod, volutpat eu justo. Vivamus et venenatis augue. Proin eu arcu mollis, tincidunt est nec.",

  },


];

export const OurWorks = () => {
  return (
    <div className={css.main}>
      <h1 className={css.title}>Наши работы</h1>
      <div className={css.work}>
        {works.map((work) => (
          <div key={work.title} className={css.wrapper}>
            <img className={css.img} src={work.image} alt={work.title} />
            <h2 className={css.text}>{work.title}</h2>
            <p className={css.text}>{work.subtitle}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
