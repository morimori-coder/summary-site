import "./menuBar.css"


export const SideMenu = () => {
    return (
        <div className="menu-bar">
            <div className="button_wrapper">
                <button className="menu-button">検索画面</button>
                <button className="menu-button">ボールルームとは</button>
                <button className="menu-button">ラテンとは</button>
                <button className="menu-button">レッスン代の相場</button>
                <button className="menu-button">掲載内容について</button>
                <button className="menu-button">お問い合わせ</button>
            </div>
        </div>
    );
};