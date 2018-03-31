import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

injectGlobal `
  @import url('https://fonts.googleapis.com/css?family=Mirza');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    color: #ffffff;
    font-family: 'Mirza', cursive;
  }

  #root {
    background-color: #000000;
    background-image: url("https://cdn.rawgit.com/sh4hids/sh4hids.github.io/a653698d/img/BG.jpg");
    background-position: center center;
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .sicon {
    position: relative;
    bottom: -7px;
    font-size: 1.2rem;
  }
`;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
