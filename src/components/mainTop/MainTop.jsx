import React from 'react'
import css from './MainTop.module.css'
import arrow from '../../assets/svg/arrow-button.svg'

const MainTop = () => {
  return (
    <div>
      <div className="container-main">
        <div className={css.mainTop}>
          <div className={css.title}>

          </div>
          <div className={css.btn1}></div>
          <div className={css.btn2}>
            <p>Сортировка</p>
            <p>по умолчанию <img src={arrow} alt="" /></p>
          </div>
          <div className={css.quantity}>
            <h1>Количество</h1>
            <button className={css.quantity__btns}>18</button>
            <button className={css.quantity__btns}>30</button>
            <button className={css.quantity__btns}>60</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainTop