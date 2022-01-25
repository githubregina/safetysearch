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
    console.log(district)
  };


  // Checkboxes
  const [isChecked, setIsChecked] = useState(false);
  const [crime, setCrime] = useState("");
  const [crimeList, setCrimeList] = useState([]);

  // handle change event of the checkboxes
  const handleOnChange = e => {
    setIsChecked(!isChecked);
    setCrime(e.target.value)
    if(isChecked) {
      setCrimeList(prevArray => [...prevArray, crime]);
    }
    console.log(crime);
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
      
      <div className="checkbox">
        <h4 className="center">Select:</h4>
        <div className="checkbox__item">
          <input
            type="checkbox"
            id="assult"
            value="assult"
            onChange={handleOnChange}
          />
          <label>Assult</label>
        </div>
        <div className="checkbox__item">
          <input
            type="checkbox"
            id="anti-social"
            value="anti-social"
            onChange={handleOnChange}
          />
          <label>Anti-social</label>
        </div>
        <div className="checkbox__item">
          <input
            type="checkbox"
            id="burglary"
            value="burglary"
            onChange={handleOnChange}
          />
          <label>Burglary</label>
        </div>
        <div className="checkbox__button">
          <input 
            type="submit" 
            value="SUBMIT" 
            onClick={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Postcode;