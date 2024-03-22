import React, {useRef} from "react";
import GuestOptionItem from "./GuestOptionItem.jsx";
import useOutsideClick from "../../hooks/useOutsideClick.js";

const GuestOptionsList = ({option, setOption, setOpenOptions}) => {
    const guestOptions = [{type: 'Adult', options: option, minLimit: 1}, {
        type: 'Children',
        options: option,
        minLimit: 0
    }, {type: 'Room', options: option, minLimit: 1}]
    const guestOptionsRef = useRef()
    useOutsideClick(guestOptionsRef, "optionDropDown", () => setOpenOptions(false))
    return (
        <div className="guestOptions" ref={guestOptionsRef}>
            {guestOptions.map((guestOption) => <GuestOptionItem key={guestOption.type} setOption={setOption}
                                                                type={guestOption.type} options={guestOption.options}
                                                                minLimit={guestOption.minLimit}/>)}
        </div>
    )
}

export default GuestOptionsList