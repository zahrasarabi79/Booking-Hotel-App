import React, {useState} from "react";
import {MdLocationOn} from 'react-icons/md'
import {HiCalendar, HiSearch} from "react-icons/hi";
import GuestOptionsList from "./GuestOptionsList.jsx";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {DateRange} from "react-date-range";
import {format} from "date-fns";

const Header = () => {
    const [destination, setDestination] = useState("")
    const [openOptions, setOpenOptions] = useState(false)
    const [option, setOption] = useState({Adult: 1, Children: 0, Room: 2})
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }])
    const [openDate, setOpenDate] = useState(false)
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
                    <div onClick={() => setOpenDate(!openDate)} className="dateDropDown">
                        {`${format(date[0].startDate, "dd / MM / yyyy")} to ${format(date[0].endDate, "dd / MM / yyyy")}`}
                    </div>
                    {/*item.selection => selection is key in date*/}
                    {openDate && <DateRange className="date" minDate={new Date()}
                                            ranges={date} onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={true}/>}
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

