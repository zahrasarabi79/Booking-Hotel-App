import React, {useState} from "react";
import {MdLocationOn} from 'react-icons/md'
import {HiCalendar, HiSearch} from "react-icons/hi";
import GuestOptionsList from "./GuestOptionsList.jsx";

const Header = () => {
    const [destination, setDestination] = useState("")
    const [openOptions, setOpenOptions] = useState(false)
    const [option, setOption] = useState({Adult: 1, Children: 0, Room: 2})
    return (
        <div className="header">
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <MdLocationOn className="headerIcon locationIcon"/>
                    <input
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        type="text"
                        placeholder="where to go?"
                        className="headerSearchInput"
                        name="destination"
                        id="destination"
                    />
                    <span className="seperator"></span>
                </div>
                <div className="headerSearchItem">
                    <HiCalendar className="headerIcon dateIcon"/>
                    <div className="dateDropDown">
                        hhh
                    </div>

                </div>
                <div className="headerSearchItem">
                    <div id="optionDropDown" onClick={() => setOpenOptions(!openOptions)}>
                        {option.Adult} adult &bull; {option.Children} children  &bull; {option.Room} room
                    </div>
                    {openOptions &&
                        <GuestOptionsList option={option} setOption={setOption} setOpenOptions={setOpenOptions}/>}
                    <span className="seperator"></span>
                </div>
                <div className="headerSearchItem">
                    <button className="headerSearchBtn">
                        <HiSearch className="headerIcon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header

