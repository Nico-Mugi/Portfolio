import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { Page } from './components/Page';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

const App = () => (
  <>
    <h1 className="lol">Nicolas Thouvenin - Portfolio</h1>
    <Menu />
    <Page />
    <Footer />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
