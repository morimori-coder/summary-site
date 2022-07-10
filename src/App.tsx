import { Component } from './components/component';
import { Default } from './components/Default/default';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*style*/
import './style.css';

export const App = () => {
    return (
        <div className="App">
            <Default/>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Default />} /> */}
                    <Route path="/component" element={<Component />} />
                    <Route path="/test" element={<h1>hogefuga</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}