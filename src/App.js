import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './components/board';
import './index.css';

ReactDOM.render(
		<Board />,
		  document.getElementById('root')
);
