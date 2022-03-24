import React from "react";

interface Props {
    date: string
    time: string
}

const style: React.CSSProperties = {
    padding:'10px'
}

const CurrentTimeAndDate = (props: Props) => {
    
    return (
        <>
        <p>現在時刻</p>
        <span style={style} className="current_date">{props.date}</span>
        <span style={style} className="current_time">{props.time}</span>
        </>
    );
}

export default CurrentTimeAndDate;