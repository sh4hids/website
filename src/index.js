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
    background-image: url("https://cdn.rawgit.com/sh4hids/cdn/32e5ea648d08080d4ce36b9dc4477bc38a7d486c/images/bg.jpg");
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

  .link-text {
    position: absolute;
    left: 50%;
    top: -50%;
    font-size: 1.3rem;
    color: #FFFFFFF;
    transform: translate(-50%, -25%);
  }

  .brush-stroke {
    width: 100%;
    path {
      transition: all ease-in-out 0.3s;
    }
  }

  .nothing-found-title {
    position: relative;
    .fourOfour {
      font-size: 150px;
      color: rgba(229,57,53, 1);
      text-shadow: 0 0 1px 1px #000000;
      z-index: 10000;
    }
    .nothing-found {
      position: absolute;
      left: 50%;
      font-size: 3rem;
      transform: translate(-50%);
      color: rgba(255,255,255,0.5);
      text-shadow: 0 0 1px 1px #000000;
    }
  }

`;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
