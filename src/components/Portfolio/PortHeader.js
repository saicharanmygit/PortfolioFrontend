import React from "react";
import "./PortHeader.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderService from "../../services/HeaderService";
import Validation from "./Validation";

const PortHeader = (props) => {

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //validation
  const [values, setValues] = useState({
    portfolioName: "",
    fundManagerName: "",
    baseCurrency: "INR",
    initialInvestment: "500 crore",
    exchange: "NSE",
    rebalancingFrequency: "",
    benchmark: "NIFTY 50",
    themeName: "",
  });

  const [errors, setErrors] = useState({});
  const handleFormsubmit = (event) => {
    //event.preventDefault();
    setErrors(Validation(values));
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //end of validation

  const savePortfolioHeader = () => {
    console.log("hello i am from saveportfolioheader");
    let headerObj = {
      portfolioName: values.portfolioName,
      baseCurrency: values.baseCurrency,
      exchange: values.exchange,
      benchmark: values.benchmark,
      fundManagerName: values.fundManagerName,
      initialInvestment: values.initialInvestment,
      currentValue: values.initialInvestment,
      rebalancingFrequency: values.rebalancingFrequency,
      themeName: values.themeName,
    };
    setErrors(Validation(values));
    console.log(headerObj);
    HeaderService.createPortfolio(headerObj)
      .then((response) => {
        setMessage("Portfolio Created Successfully");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <nav className="tab">
        <div className="container">
          <div className="wrapper">
            <nav
              class="navbar navbar-expand-sm bg-light justify-content-center"
              className="inter"
            >
              <ul class="navbar-nav">
                <li class="nav-item " className="left">
                  <a class="nav-link " href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="35"
                      fill="currentColor"
                      class="bi bi-arrow-left-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="nav-item">
                  <h2>Portfolio Header</h2>
                </li>
                <li class="nav-item" className="right">
                  <a class="nav-link " href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="35"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="contact">
              <form name="simpleForm">
                <p>
                  <p className="p1">Portfolio Name</p>
                  <input
                    onChange={handleChange}
                    value={values.portfolioName}
                    type="text"
                    placeholder="Enter portfolio name"
                    name="portfolioName"
                  />
                  {/* validation */}
                  {errors.portfolioName && (
                    <p className="error">{errors.portfolioName}</p>
                  )}
                  {/* validation end */}
                </p>
                <p>
                  <p className="p2"> Fund Manager</p>
                  <input
                    onChange={handleChange}
                    value={values.fundManagerName}
                    type="text"
                    placeholder="Enter Fund manager name"
                    name="fundManagerName"
                  />
                  {/* validation */}
                  {errors.fundManagerName && <p className="error">{errors.fundManagerName}</p>}
                  {/* validation end */}
                </p>
                <p>
                  <p className="p3"> Base Currency</p>
                  <input
                    onChange={handleChange}
                    value={values.baseCurrency}
                    type="text"
                    placeholder="INR"
                    name="baseCurrency"
                  />
                  {errors.baseCurrency && <p className="error">{errors.baseCurrency}</p>}
                </p>
                <p>
                  <p className="p4">Initial Investment</p>
                  <input
                    onChange={handleChange}
                    value={values.initialInvestment}
                    type="text"
                    placeholder="500 CRORES"
                    name="initialInvestment"
                  />
                  {errors.initialInvestment && (
                    <p className="error">{errors.initialInvestment}</p>
                  )}
                </p>
                {/* <p>
                  <p className="p5">Current value of Investment</p>
                  <input
                    onChange={(e) => {
                      setCurrInvestment(e.target.value);
                    }}
                    value={currInvestment}
                    type="text"
                    placeholder="500 CRORES"
                    name="Current Investment"
                  />
                </p> */}
                <p>
                  <p className="p6">Exchange</p>
                  <input
                    onChange={handleChange}
                    value={values.exchange}
                    type="text"
                    placeholder="NSE"
                    name="exchange"
                  />{" "}
                  {errors.exchange && <p>{errors.exchange}</p>}
                </p>
                <p>
                  <p className="p7">Rebalancing Frequency</p>
                  <select
                    className="Refreq"
                    onChange={handleChange}
                    value={props.selected}
                    name="Refreq"
                  >
                    <option value="daily">DAILY</option>

                    <option value="monthly">MONTHLY</option>

                    <option value="yearly">YEARLY</option>
                  </select>
                  {errors.rebalancingFrequency && (
                    <p className="error">{errors.rebalancingFrequency}</p>
                  )}
                </p>
                <p>
                  <p className="p8">Default Benchmark</p>
                  <input
                    onChange={handleChange}
                    value={values.benchmark}
                    type="text"
                    placeholder="NIFTY 50"
                    name="benchmark"
                  />
                  {errors.benchmark && <p className="error">{errors.benchmark}</p>}
                </p>
                {/* <p>
                  <p className="p9">Status</p>
                  <input
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    value={status}
                    type="text"
                    placeholder="Display"
                    name="status"
                </p>
                  /> */}
                <p>
                  <p className="Themes">Themes</p>
                  <div className="drop">
                    <select
                      name="Themes"
                      onChange={handleChange}
                      value={props.selected}
                    >
                      <option value="Conservative">Conservative</option>

                      <option value="Aggressive">Aggressive</option>
                      <option value="Moderately Aggressive">
                        Moderately Aggressive
                      </option>
                      <option value="Very Aggressive">VeryAggressive</option>
                    </select>
                    {errors.themeName && <p className="error">{errors.themeName}</p>}
                  </div>
                </p>
                {/* ()=>navigate('/portcomposition') */}
              </form>
              {message}
              <button
                className="btn btn-primary submit"
                onClick={() => {
                  savePortfolioHeader();
                  handleFormsubmit();
                }}
              >
                SAVE
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-info reset" type="reset">
                RESET
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PortHeader;
