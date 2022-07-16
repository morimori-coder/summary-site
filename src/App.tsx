import { Search } from './components/search';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/*style*/
import './style.css';
import { Header } from './components/Default/Header/header';
import { SideMenu } from './components/Default/SideMenu/sideMenu';

export const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="contents-wrapper">
                <div className="main-contents">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Search />} />
                            <Route path="/test" element={<h1>hogefuga</h1>} />
                        </Routes>
                    </BrowserRouter>
                </div>
                <SideMenu />
            </div>

        </div>
    );
}