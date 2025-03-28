import React from 'react';
import css from "./works.module.css";
import workOne from "../../img/work-one.jpg"
import workTwo from "../../img/work-two.jpg"
import workThree from "../../img/work-three.jpg"



const works = [
    {"image": workOne, title: 'Столешница из камня для ванной комнаты', subtitle: 'описание камня и столешницы'},
    {"image": workTwo, title: 'Столешница из камня для кухни', subtitle: 'описание камня и столешницы'},
    {"image": workThree, title: 'Подоконник из камня', subtitle: 'описание камня и подоконника'},  
]

export const OurWorks = () => {
    return <div className={css.main}>
<h1 className={css.title}>Наши работы</h1>
<div className={css.work}>
{works.map((work) => (
          <div className={css.wrapper}>
            <img className={css.img} src={work.image} alt="bathroom" />
            <h2>{work.title}</h2>
            <p>{work.subtitle}</p>
          </div>
            

        ))}
</div>

    </div>;
}

