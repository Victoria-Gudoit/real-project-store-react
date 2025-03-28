import React from 'react';
import "./calculator.css"

export const Calculator = ({active, setActive, children}) => {

 return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
    

    <form class="form-inner">
     <h3 class="form-title">Рассчитать стоимость</h3>
     <input type="text" placeholder="Ваше имя"/>
    <input type="tel" placeholder="Телефон"/>
     <textarea placeholder="Изделие, которое вы хотите" rows="3"></textarea>
    <input type="submit" value="Отправить"/>
     </form>
        </div>
    </div>
 )
//     return <div class={active ? "wrapperr active" : "wrapperr"} onClick={() => setActive(false)}>
//     <form class="decor" onClick={e => e.stopPropagation()}>

//     <div class="form-inner">
//     <h3>Рассчитать стоимость</h3>
//     <input type="text" placeholder="Ваше имя"/>
//     <input type="tel" placeholder="Телефон"/>
//     <textarea placeholder="Изделие, которое вы хотите" rows="3"></textarea>
//     <input type="submit" value="Отправить"/>
//     </div>
//     </form>
//     </div>
}

