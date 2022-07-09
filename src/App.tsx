import { Component } from './components/component';
import { Default } from './components/Default/default';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*style*/
import './style.css';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/default" element={<Default />} />
                    <Route path="/component" element={<Component />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}