import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState('AF');
  const [states, setStates] = useState([]);

  useEffect(() => {
    setStates(State.getStatesOfCountry(selectedCountry));
    }, [selectedCountry]
  );
    
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select id="countryDropdown" onChange={handleCountryChange} value={selectedCountry}>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select id="stateDropdown">
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
            ))}
          </select>
           
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>        
          
          <Popup trigger=
                {<button className= "link" type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
