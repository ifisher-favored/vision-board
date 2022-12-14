import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import Main from './component/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux'

const store = createStore(rootReducer)







//React.createElement
// ('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

//ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>);


