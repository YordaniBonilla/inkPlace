import React from 'react';

const Select = ({options}) => {
	return (
	  <div>
		<select >
		  {options.map((item,i) => {
		  	return <option key={i}> {item.style} </option>
		  })}
		</select>
	  </div>
	)
}

export default Select;