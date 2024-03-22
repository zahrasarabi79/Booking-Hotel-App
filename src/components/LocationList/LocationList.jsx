import React from 'react'
import useFetch from "../../hooks/useFetch.js";

const LocationList = () => {
    const {isLoading, date} = useFetch("http://localhost:5000/hotels", "")
    if (isLoading) <p> is Loading . . .</p>
    return (
        <div className={"nearbyLocation"}><h2>Nearby Location</h2>
            <div className={'locationList'}>
                {date.map((item) => {
                    return (<div className={"locationItem"} key={item.id}>
                        <img src={item.picture_url.url} alt={item.name}/>
                        <div className={"locationItemDesc"}>
                            <p className={"location"}>{item.smart_location}</p>
                            <p className={"name"}>{item.name}</p>
                            <p className={"price"}>$&nbsp;{item.price}&nbsp;<span>night</span></p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default LocationList