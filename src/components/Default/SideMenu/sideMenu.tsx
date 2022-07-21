import { Link} from "react-router-dom";
import "./menuBar.css"


export const SideMenu = () => {
    return (
        <div className="menu-bar">
            <h3 className="sub-title">メニュー</h3>
            <hr className="hr-color" />
            <ul className="sub-menu">
                <li><Link to="/">検索画面</Link></li>
                <li><Link to="/ballroom">ボールルームとは</Link></li>
                <li><Link to="/latin">ラテンとは</Link></li>
                <li><Link to="/price">レッスン代の相場</Link></li>
                <li><Link to="/about">掲載内容について</Link></li>
                <li><Link to="/contact">お問い合わせ</Link></li>
                <li><Link to="/test">テスト</Link></li>
            </ul>
        </div>
    );
};