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
    background-image: url("https://cdn.rawgit.com/sh4hids/sh4hids.github.io/a653698d/img/BG.jpg");
    background-position: center center;
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #root:not(:empty) + .spinner {
    display: none;
  }

  .spinner {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
`;

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
