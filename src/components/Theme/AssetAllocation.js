import { values } from "lodash";
import React from "react";
import { useState } from "react";
import "./AssetAllocation.css";
import HeaderService from "../../services/HeaderService";
// import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const AssetAllocation = (props) => {
  //check box trial function
  // const [confirmed, setConfirmed] = useState(false);
  const [message, setMessage] = useState("");
  //check box trial end

  //error message
  // const[errorMessage,setErrorMessage]=useState('');

  //error message ends
  //inputs starts here
  const [percentages, setPercentages] = useState({
    equity: 0,
    commodities: 0,
    bonds: 0,
  });

  //inputs end here
  const [formData, setFormData] = useState({
    tname: "",
    invest: "",
    risk: "",
  });
  //percentage start
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = parseInt(value, 10);
    parsedValue = isNaN(parsedValue) ? 0 : parsedValue;

    if (parsedValue < 0) {
      parsedValue = 0;
    } else if (parsedValue > 100) {
      parsedValue = 100;
    }

    setPercentages((prevPercentages) => ({
      ...prevPercentages,
      [name]: parsedValue,
    }));
  };

  //percentage ends here

  //handle change starts here
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //handle change ends here

  //save Asset allocation starts here
  const saveAssetAllocation = () => {
    console.log("hello I am asset allocation");
    let assetobj = {
      tname: values.tname,
      invest: values.invest,
      risk: values.risk,
      equities: values.equities,
      commodities: values.commodities,
      bonds: values.bonds,
    };
    console.log(assetobj);
    HeaderService.createPortfolio(assetobj)
      .then((response) => {
        setMessage("Theme Created Successfully");
        console.log(response.data);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //save asset allocation ends here

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Perform form submission logic here
    // setConfirmed(true);
    const totalPercentage = Object.values(percentages).reduce(
      (sum, value) => sum + value,
      0
    );
    console.log(formData);
    console.log(percentages);
    if (totalPercentage === 100) {
      // Submit the form or perform any desired action
      console.log("Form submitted:", percentages);
    } else if (totalPercentage < 100) {
      window.alert("The total percentage must be 100%.");
    } else {
      window.alert("The total percentage cannot exceed 100%.");
    }
  };
  return (
    <div className="form-container">
      {/* <h2>Asset Allocation</h2> */}
      <div>
        <h2 className="bordered-heading">Asset Allocation</h2>
      </div>
      <form className="assetForm">
        <div className="form-row">
          <label htmlFor="tname" className="tname_theme">Theme Name:</label>
          <input
            type="text"
            id="tname"
            name="tname"
            value={formData.tname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="invest" className="invest_tab">
            Investment Horizon
          </label>
          <select
            className="invest"
            onChange={handleChange}
            value={props.selected}
            name="invest"
          >
            <option value="">---select---</option>
            <option value="long">Long term</option>
            <option value="short">Short term</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="risk" className="risk_tab">
            Risk
          </label>
          <br />
          <select
            className="risk"
            onChange={handleChange}
            value={props.selected}
            name="risk"
          >
            <option value="">---select---</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="equity">Equity:</label>
          <input
            type="text"
            // placeholder="Enter the percentage"
            name="equity"
            value={percentages.equity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="commodities">Commodities:</label>
          <input
            type="number"
            name="commodities"
            value={percentages.commodities}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="bonds">Bonds:</label>
          <input
            type="number"
            name="bonds"
            value={percentages.bonds}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button
        className="my-button"
        type="submit"
        onClick={() => {
          saveAssetAllocation();
          handleSubmit();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AssetAllocation;

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.formData,
//   }));
// };
//----
