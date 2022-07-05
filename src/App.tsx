import React from 'react';
import {Component} from './components/component';
import { Default } from './components/Default/default';

/*style*/
import './style.css';

export const App = () => {
    return (
        <div className="App">
            <Default></Default>
        </div>
    );
}