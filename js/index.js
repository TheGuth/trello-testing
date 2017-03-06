import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

require('babel-polyfill');

const lists = [
  {
    id: 1,
    title: 'List One',
    cards: [
      {
        id: 1,
        text: 'one'
      },
      {
        id: 2,
        text: 'two'
      }
    ]
  },
  {
    id: 2,
    title: 'List Two',
    cards: [
      {
        id: 3,
        text: 'three'
      },
      {
        id: 4,
        text: 'four'
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title='This is the Board Title' lists={lists} />, document.getElementById('app'))
);
