import { SideMenu } from './SideMenu/sideMenu';

export const Default = () => {
    return (
        <div>
           
            <div className="contents-wrapper">
                <div className="main-contents"></div>
                <SideMenu></SideMenu>
            </div>
        </div>
    );
};