import React from "react";
import GuestOptionItem from "./GuestOptionItem.jsx";
const GuestOptionsList = ({option ,setOption}) => { 
  const guestOptions=[{type:'Adult',options:option,minLimit:1},{type:'Children',options:option,minLimit:0},{type:'Room',options:option,minLimit:1}]
  return (
      <div className="guestOptions">
          {guestOptions.map((guestOption)=><GuestOptionItem key={guestOption.type}  setOption={setOption} type={guestOption.type} options={guestOption.options} minLimit={guestOption.minLimit}/>)}
      </div>
  )
}

export default GuestOptionsList