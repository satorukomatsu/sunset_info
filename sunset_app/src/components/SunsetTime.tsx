import React from "react";

const SunsetTime = () => {
    const axios = require('axios');
    const url = 'https://labs.bitmeister.jp/ohakon/json/';
    const pram = `?mode=sun_moon_rise_set&year=2022&month=3&day=12&lat=35.8554&lng=139.6512`

    async function main () {
        try{
            const res = await axios.get(url + pram);
            const items = res.data;
            console.log(items.rise_and_set.sunrise);
        } catch(error:any) {
            console.log(error.response)
        }
    }
    main();

    return (
        <>
        <div></div>
        </>
    )
}

export default SunsetTime;