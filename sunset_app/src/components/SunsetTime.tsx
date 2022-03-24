import React from "react";

const style: React.CSSProperties = {
    padding: '20px'
}
const SunsetTime = () => {

    return (
        <div style={style}>
            <h1>本日の日の入り時間</h1>
            {/* 日の入り時間の取得 */}
            <p>今日は○○時○○分に日が暮れます</p><br />
            {/* 日の入り時間の１時間前の表示 */}
            <p>○○時○○分までには洗濯物を取り込まなくちゃね！</p>
        </div>
    )
}

export default SunsetTime;