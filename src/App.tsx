import React from 'react';
import {Component} from './components/component';
import { Header } from './components/Header/header';

/*style*/
import './style.css';
import './menuBar.css';

export const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <Component></Component>
        </div>
    );
}