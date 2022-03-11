import React from "react";
import { useState, useEffect } from "react";

interface Props {
    onClick: () => void
    position: {latitude: number, longitude: number}
}

const CurrentPosition = (props: Props) => {   
    return (
        <>
        <button onClick={() => props.onClick}>get current position</button>
        <div>{props.position.latitude}</div>
        <div>{props.position.longitude}</div>
        </>
    );
}

export default CurrentPosition;