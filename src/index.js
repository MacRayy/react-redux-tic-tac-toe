import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from "./store";

const renderGame = () => {ReactDOM.render(
  <Game />,
  document.getElementById('root')
)};

renderGame();

store.subscribe(renderGame);

registerServiceWorker();
