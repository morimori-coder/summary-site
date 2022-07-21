import { Search } from './components/Search/search';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Default/Header/header';
import { SideMenu } from './components/Default/SideMenu/sideMenu';

/*style*/
import './style.css';

export const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="contents-wrapper">
                <BrowserRouter>
                    <div className="main-contents">
                        <Routes>
                            <Route path="/" element={<Search />} />
                            <Route path="/test" element={<h1>hogefuga</h1>} />
                        </Routes>
                    </div>
                    <SideMenu />
                </BrowserRouter>
            </div>
        </div>
    );
}