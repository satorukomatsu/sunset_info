import React from "react";

interface Props {
    time: string
}

const CurrentTime = (props: Props) => {
    
    return (
        <>
        <p>現在時刻</p>
        <p className="current_time">{props.time}</p>
        </>
    );
}

export default CurrentTime;