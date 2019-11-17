import React from 'react';

const Select = ({options, onChange, value}) => {
	
    
	return (
		<div class="input-group mb-3" >
		<select  className="custom-select" id="inputGroupSelect02" onChange={onChange}>
		  {options.map((item,i) => {
		  	return <option selected value={item.style} style={{backgroundColor: 'disabled', backgroundImage: 'none'}} key={i}> {item.style} </option>
		  })}
		</select>
		</div>
	)
}

export default Select;