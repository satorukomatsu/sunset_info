import React from "react";

interface Props {
    position: {latitude: number, longitude: number}
}

const CurrentPosition = (props: Props) => {   
    return (
        <>
        <p>現在の位置情報</p>
        <div>{props.position.latitude}</div>
        <div>{props.position.longitude}</div>
        </>
    );
}

export default CurrentPosition;