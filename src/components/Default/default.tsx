import { Header } from './Header/header';
import { SideMenu } from './SideMenu/sideMenu';

export const Default = () => {
    return (
        <div>
            <Header></Header>
            <hr></hr>
            <div className="contents-wrapper">
                <div className="main-contents"></div>
                <SideMenu></SideMenu>
            </div>
        </div>
    );
};