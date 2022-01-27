import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from './docs/data_postcodes.json';
import './Postcode.css';
import './Button.css';

function Postcode() {
  const [area, setArea] = useState(null);
  const [district, setDistrict] = useState(null);
  const [districtList, setDistrictList] = useState([]);

  // handle change event of the area dropdown
  const handleAreaChange = (obj) => {
    setArea(obj);
    setDistrictList(obj.districts);
    setDistrict(null);
  };

  // handle change event of the district dropdown
  const handleDistrictChange = (obj) => {
    setDistrict(obj);
    console.log(obj)
  };


  // Checkboxes
  const crimeList = ["Assault", "Anti-social", "Burglary"]
  const [checked, setChecked] = useState([]);

  // handle change event of the checkboxes
  const handleOnClick = (e) => {
    var updatedList = [...checked];
    if(e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }
    setChecked(updatedList);
    console.log(updatedList)
  }

  //handle submit button
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  }

  // NEXT: need to use selected district and crime list to get data to return.
  // Also need to see if manage to work on google map API or not.

  return (
    <div className="search__container">
      <div className="search__dropdown">
        <div className="search__item">
          <h3 className="search__heading">Postcode Area</h3>
          <Select
            placeholder="Select An Area"
            value={area}
            options={data}
            onChange={handleAreaChange}
            getOptionLabel={x => x.area}
            getOptionValue={x => x.area}
          />
        </div>
        <div className="search__item">
          <h3 className="search__heading">Postcode District</h3>
           <Select
            placeholder="Select A District"
            value={district}
            options={districtList}
            onChange={handleDistrictChange}
            getOptionLabel={x => x.name}
            getOptionValue={x => x.name}
          />
        </div>
      </div>
      
      <div className="crimeList">
        <h4 className="crimeList__title">Select:</h4>
        <div className="crimeList__container">
          {crimeList.map((item, index) => (
            <div key={index}>
              <input 
                value={item} 
                type="checkbox"
                onClick={handleOnClick} 
              />
              <span className="crimeList__item">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Postcode;