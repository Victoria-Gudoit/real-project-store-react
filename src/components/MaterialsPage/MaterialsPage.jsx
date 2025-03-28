import React from 'react';
import css from "../ProductsPage/produt.module.css";
import caesar from "../../img/caesar.jpg"
import technistone from "../../img/technistone.jpg"
import belenco from "../../img/belenco.jpg"




export const MaterialsPage = () => {
    const materials = [
        {"image": caesar, title: 'Caesarstone'},
        {"image": technistone, title: 'Technistone'},
        {"image": belenco, title: 'Belenco'},  
    ]
    
    return <div className={css.main}>
    <h1 className={css.title}>Кварц</h1>
    <div className={css.product}>
      {materials.map((material) => (
        <div className={css.wrapper}>
          <img className={css.img} src={material.image} alt="bathroom" />
          <h2>{material.title}</h2>
        </div>
          

      ))}
    </div>
  </div>;
}

