import React from "react";
import { useState } from "react";
import "./AssetAllocation.css";

const AssetAllocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <form className="f">
        <div className="form-row">
          <label htmlFor="phone">Theme Name</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div className="form-row">
          <label htmlFor="phone">Investment Horizon</label>
          <input
            type="tel"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
          />
        </div> */}
        {/* <div className="form-row">
            <label htmlFor="address">Risk</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div> */}
        <label htmlFor="invest">Investment Horizon</label>
        <select
          className="invest"
          onChange={handleChange}
          value={props.selected}
          name="invest"
          >
          <option value="long">Long term</option>
          <option value="short">Short term</option>
          {/* <option value="yearly">YEARLY</option> */}
        </select>
        <label htmlFor="risk">Risk</label>
        <select
          className="risk"
          onChange={handleChange}
          value={props.selected}
          name="risk"
          >
          <option value="daily">High</option>
          <option value="monthly">Low</option>
        </select>
        <div className="form-row">
          <label htmlFor="message">Equities:</label>
          <input
            id="equi"
            name="equi"
            value={formData.equi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Commodities:</label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="risk">Bonds</label>
          <input
            type="text"
            id="risk"
            name="risk"
            value={formData.risk}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <button className="formbutton" type="submit">
        Save
      </button>
    </div>
  );
};

export default AssetAllocation;
