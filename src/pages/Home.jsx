import React from 'react'

import {Categories, SortPopup, RollBlock} from '../components';


function Home({ items }) {


    return (
        <div className="container">
        <div className="content__top">
          <Categories
          items={[
            'Горячие',
            'Холодные',
            'Запеченные',
            'Суши',
            'Сеты',
          ]}/>
          <SortPopup items={['популярности','цене','алфавиту']}/>
        </div>
        <h2 className="content__title">Все роллы</h2>
        <div className="content__items">
          {
            items.map((obj) => (
            <RollBlock key={obj.id} {...obj}/>
          ))}
        </div>
      </div>
    )
}

export default Home
