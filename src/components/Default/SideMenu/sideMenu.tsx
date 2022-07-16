import "./menuBar.css"


export const SideMenu = () => {
    return (
        <div className="menu-bar">
            <h3 className="sub-title">メニュー</h3>
            <hr />
            <ul className="sub-menu">
                <li><a href="#">検索画面</a></li>
                <li><a href="#">ボールルームとは</a></li>
                <li><a href="#">ラテンとは</a></li>
                <li><a href="#">レッスン代の相場</a></li>
                <li><a href="#">掲載内容について</a></li>
                <li><a href="#">お問い合わせ</a></li>
            </ul>
        </div>
    );
};