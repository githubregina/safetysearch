import React from 'react'

const Checkbox = ({label, isSelected, onCheckboxChange}) => (
  <div className="form-check">
    <label htmlFor=''>
      <input 
        type="text"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input" 
      />
      {label}
    </label>
  </div>
);

export default Checkbox;