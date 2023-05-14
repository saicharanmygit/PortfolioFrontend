import React from "react";
import "./PortHeader.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderService from "../../services/HeaderService";

const PortHeader = (props) => {
  const [portfolioName, setPortfolioName] = useState("");
  const [fundManagerName, setFundManagerName] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");
  const [currInvestment, setCurrInvestment] = useState("");
  const [exchange, setExchange] = useState("");
  const [rebalancingFrequency, setRebalancingFrequency] = useState("");
  const [benchmark, setBenchmark] = useState("");
  const [status, setStatus] = useState("");
  const [themes, setThemes] = useState("");  
const [message, setMessage] = useState("")
  const navigate=useNavigate();
  
  
   const savePortfolioHeader=()=>{
    console.log("hello i am from saveportfolioheader");
    let headerObj = {
      portfolioName: portfolioName,
      baseCurrency:baseCurrency,
      exchange:exchange,
      benchmark:benchmark,
      fundManagerName:fundManagerName,
      initialInvestment:initialInvestment,
      currentValue:currInvestment,
      rebalancingFrequency:rebalancingFrequency,
      status:status,
      themeName:themes
    };
    console.log(headerObj);
    HeaderService.createPortfolio(headerObj).then((response)=>{
      setMessage("Portfolio Created Successfully");
      console.log(response.data);
    
    }).catch((error)=>{console.log(error)})

  }

  return (
    <div>
      <div>
        <Navbar/>
    </div>
    <nav className="tab" >
      <div className="container">
        <div className="wrapper">
          <nav
            class="navbar navbar-expand-sm bg-light justify-content-center"
            className="inter">
            <ul class="navbar-nav">
              <li class="nav-item " className="left">
                <a class="nav-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="35"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16">
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
                    viewBox="0 0 16 16">
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
            <form>
              <p>
                <p className="p1">Portfolio Name</p>
                <input
                  onChange={(e)=>{setPortfolioName(e.target.value)}}
                  value={portfolioName}
                  type="text"
                  placeholder="Enter portfolio name"
                  name="Portfolio name"
                />
              </p>
              <p>
                <p className="p2"> Fund Manager</p>
                <input
                  onChange={(e)=>{setFundManagerName(e.target.value)}}
                  value={fundManagerName}
                  type="text"
                  placeholder="Enter Fund manager name"
                  name="Fundmanager name"
                />
              </p>
              <p>
                <p className="p3"> Base Currency</p>
                <input
                  onChange={(e)=>{setBaseCurrency(e.target.value)}}
                  value={baseCurrency}
                  type="text"
                  placeholder="INR"
                  name="Base Currency"
                />
              </p>
              <p>
                <p className="p4">Initial Investment</p>
                <input
                  onChange={(e)=>{setInitialInvestment(e.target.value)}}
                  value={initialInvestment}
                  type="text"
                  placeholder="500 CRORES"
                  name="Initial Investment"
                />
              </p>
              <p>
                <p className="p5">Current value of Investment</p>
                <input
                  onChange={(e)=>{setCurrInvestment(e.target.value)}}
                  value={currInvestment}
                  type="text"
                  placeholder="500 CRORES"
                  name="Current Investment"
                />
              </p>
              <p>
                <p className="p6">Exchange</p>
                <input
                  onChange={(e)=>{setExchange(e.target.value)}}
                  value={exchange}
                  type="text"
                  placeholder="NSE"
                  name="Exchange"
                />
              </p>
              <p>
                <p className="p7">Rebalancing Frequency</p>
                <select
                className="Refreq"
                  onChange={(e)=>{setRebalancingFrequency(e.target.value)}}
                  value={props.selected}
                  name="Rebalancing Frequency">
                  <option value="daily">DAILY</option>
                  <option value="monthly">MONTHLY</option>
                  <option value="yearly">YEARLY</option>
                </select>
              </p>
              <p>
                <p className="p8">Default Benchmark</p>
                <input
                  onChange={(e)=>{setBenchmark(e.target.value)}}
                  value={benchmark}
                  type="text"
                  placeholder="NIFTY 50"
                  name="Benchmark"
                />
              </p>
              <p>
                <p className="p9">Status</p>
                <input
                  onChange={(e)=>{setStatus(e.target.value)}}
                  value={status}
                  type="text"
                  placeholder="Display"
                  name="Status"
                />
              </p>
              <p>
                <p className="Themes">Themes</p>
                <div className="drop">
                  <select
                    name="Themes"
                    onChange={(e)=>{setThemes(e.target.value)}}
                    value={props.selected}>
                    <option value="Conservative">Conservative</option>
                    <option value="ModeratelyConservative">
                      ModeratelyConservative
                    </option>
                    <option value="Aggressive">Aggressive</option>
                    <option value="ModeratelyAggressive">
                      ModeratelyAggressive
                    </option>
                    <option value="VeryAggressive">VeryAggressive</option>
                  </select>
                </div>
              </p>
              {/* ()=>navigate('/portcomposition') */}
              
            </form>
            {message}
            <div className="Full">
              <div>
                <button className="btn btn-primary submit"  onClick={()=>{savePortfolioHeader()}}>
                  SUBMIT
                </button>
                &nbsp;&nbsp;
              </div>
              <div>
              <button className="btn btn-info reset" type="reset">
                  RESET
                </button>
              </div>
                <div>

                <button className="btn btn-info mt5 ">Continue</button>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </nav>
    </div>

  );
};

export default PortHeader;
