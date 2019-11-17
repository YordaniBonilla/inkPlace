import React from 'react';

const Select = ({options}) => {
	return (
		<div class="input-group mb-3">
		<select  class="custom-select" id="inputGroupSelect02">
		  {options.map((item,i) => {
		  	return <option selected style={{backgroundColor: 'disabled', backgroundImage: 'none'}} key={i}> {item.style} </option>
		  })}
		</select>
		</div>
	)
}

export default Select;