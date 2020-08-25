import React from 'react';
import {Route} from 'react-router-dom';

/*
import trash from './assets/img/trash.svg'
import plus from './assets/img/plus.svg'
import grey_arrow_left from './assets/img/grey-arrow-left.svg'
import empty_cart from './assets/img/empty-cart.png'
import cart from './assets/img/cart.svg'
import arrow_top from './assets/img/arrow-top.svg'
*/

import './css/app.css';
import {Home, Cart} from './pages'
import {Header} from './components';


function App() {

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  </div>
  );
}

export default App;
