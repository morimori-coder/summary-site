/*style*/
import './style.css';
export const Search = () => {
    return (
        <div>
            <div className="label-and-textbox" >
                <label className="left-label">最寄り駅　　</label>
                <input/>
            </div>
            <div className="label-and-textbox">
                <label className="right-label">教室名　　　</label>
                <input/>
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
                        <td><a href="http://hiuradance.com/" >ヒウラダンススクール</a></td>
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
    );
};