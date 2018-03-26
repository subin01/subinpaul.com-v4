import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';
import Firebase from './Firebase';
import Header from './pages/Header';
import Footer from './pages/Footer';

import './styles/normalize.css';
import './styles/index.css';

Firebase.init();

ReactDOM.render((
  <section id="container">
    <Header/>
    <section id="main-content">
      <section className="wrapper site-min-height">

        <HashRouter>
          <App />
        </HashRouter>

      </section>
    </section>


    <Footer/>
  </section>
  ),
  document.getElementById('root')
);
