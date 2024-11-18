import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formation from './pages/Formation';
import QuiSuisJe from './pages/QuiSuisJe';
import Bureaux from './pages/Bureaux';
import Blog from './pages/Blog';
import Article from './pages/Article';
import CGV from './pages/CGV';
import Politique from './pages/Politique';
import Cookies from './pages/Cookies';
import Erreur from './pages/Erreur';
import EnCours from './pages/EnCours';
import Inscription from './pages/Inscription';
import Avis from './pages/Avis';
import RGPD from './pages/RGPD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/ScarabeeDore' element={<App />}></Route>
        <Route path='/formation' element={<Formation/>}></Route>
        <Route path='/qui' element={<QuiSuisJe/>}></Route>
        <Route path='/bureau' element={<Bureaux/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/article/:id' element={<Article/>}></Route>
        <Route path='/cgv' element={<CGV/>}></Route>
        <Route path='/politique' element={<Politique/>}></Route>
        <Route path='/cookies' element={<Cookies/>}></Route>
        <Route path='*' element={<Erreur/>}></Route>
        <Route path='/download' element={<EnCours/>}></Route>
        <Route path='/avis' element={<Avis/>}></Route>
        <Route path='/inscription' element={<Inscription/>}></Route>
        <Route path='/rgpd' element={<RGPD/>}></Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
