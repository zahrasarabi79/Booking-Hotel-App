import React from 'react'
import {HiMinus, HiPlus} from "react-icons/hi";

const GuestOptionItem = ({type, options, minLimit, setOption}) => {

    const handleButton = (type, oprationsName) => {
        setOption((prev) => ({...prev, [type]: oprationsName === 'dec' ? options[type] - 1 : options[type] + 1}))
    }

    return (
        <div className="guestOptionItem">
            <span className="optionText">{type}</span>
            <div className='optionCounter'>
                <button className='optionCounterBtn'
                        onClick={() => handleButton(type, 'dec')} disabled={options[type] <= minLimit}><HiMinus
                    className='icon'/></button>
                <span className='optionCounterNumber'>{options[type]}</span>
                <button className='optionCounterBtn'
                        onClick={() => handleButton(type, 'inc')}><HiPlus
                    className='icon'/></button>
            </div>
        </div>
    )
}

export default GuestOptionItem