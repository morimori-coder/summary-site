import React from 'react';

/*style*/
import '../style.css';
import '../menuBar.css';

export const Component = () => {
    return(
        <body>
                {/* <header className="common-header wrapper">
                    都内の社交ダンス教室一覧
                </header> */}
                {/* <hr> */}
                    <div className="contents-wrapper">
                        <div className="main-contents">

                            <div className="label-and-textbox" >
                                <label className="left-label">最寄り駅　　</label>
                                {/* <input> */}
                            </div>
                            <div className="label-and-textbox">
                                <label className="right-label">教室名　　　</label>
                                {/* <input> */}
                            </div>
                            <div className="label-and-textbox">
                                <label className="left-label">習える種目　</label>
                                <select>
                                    <option>ボールルーム</option>
                                    <option>ラテン</option>
                                    <option>両方</option>
                                </select>
                                <button className="search-button">検索</button>
                            </div>
                            <table align="center" >
                                <thead >
                                    <tr>
                                        <th >教室名</th>
                                        <th className="dance-kind" >習える種目</th>
                                        <th >最寄り駅</th>
                                        <th >駅から何分</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="http://hiuradance.com/" >樋浦ダンススクール</a></td>
                                        <td>両方</td>
                                        <td>大宮</td>
                                        <td>7分</td>
                                    </tr>
                                    <tr>
                                        <td><a href="http://msdanca.cocolog-nifty.com/">エムズダンスアカデミー</a></td>
                                        <td>ボールルーム</td>
                                        <td>巣鴨</td>
                                        <td>4分</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.tanido-dance.com/">谷堂ダンスワールド</a></td>
                                        <td>両方</td>
                                        <td>赤坂見附</td>
                                        <td>1分</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                    </div>
            </body>
    );
};