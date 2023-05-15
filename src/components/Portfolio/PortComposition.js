import React, { useEffect, useState } from "react";
import "./PortComposition.css";
import Navbar from "../Navbar/Navbar";
import HeaderService from "../../services/HeaderService";
import { useLocation } from "react-router-dom";
const PortComposition = () => {
  const location = useLocation();
  const { transferObject } = location.state;
  //console.log(transferObject);

  const [masterData, setMasterData] = useState([]);
  const [isinNumber, setIsinNumber] = useState();
  const [reqData, setReqData] = useState("");
  const [quantity, setQuantity] = useState();
  const [value, setValue] = useState();
  const [message, setMessage] = useState("");
  const [compositionData, setCompositionData] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    HeaderService.fetchData()
      .then((response) => {
        setMasterData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setIsinNumber(e.target.value);
    HeaderService.fetchByIsNumber(e.target.value)
      .then((response) => {
        setReqData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(e.target.value);
  };
  const calculateValue = (e) => {
    setQuantity(e.target.value);
    setValue(e.target.value * reqData.lastPrice);
  };

  console.log(compositionData);
  const savePortfolioComposition = (e) => {
    let compositionObject = {
      securityName: reqData.nameOfCompany,
      equityCategory: reqData.equity,
      assetClass: reqData.assetClass,
      subAssetClass: reqData.subAssetClass,
      exchange: reqData.exchange,
      transactionType: "buy",
      price: reqData.lastPrice,
      quantity: quantity,
      value: value,
      allocation: "90",
      portfoliodetail: {
        portfolioName: transferObject.portfolioName,
      },
    };
    HeaderService.createComposition(compositionObject)
      .then((response) => {
        setCompositionData({
          data: response.data,
          loading: false,
        });
        setMessage("security added succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //console.log(masterData);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="c1">
        <h1>Portfolio Composition</h1>

        
        <div>
          {transferObject.portfolioName}
          {transferObject.theme.themeName}
        </div>
        <div className="c2">
          <button className="l1">Add securities</button>
        </div>
        <table>
          <tr bgcolor="#FFC300">
            <th>Security Name</th>
            <th>Asset class</th>
            <th>SubAsset class</th>
            <th>Equity Category</th>
            <th>Security Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              {/* <input list="stocks"></input>
              <datalist id="stocks" value={isinNumber} onChange={handleChange}>
              <option value="" >Select the Company</option>
              {masterData.map((item)=>{
                return <option value={item.isinNumber} >{item.nameOfCompany}</option>
              })}
              </datalist>
              <input type="submit" onChange={handleChange} ></input> */}
              
              <select value={isinNumber} onChange={handleChange}>
                <option value="">Select the Company</option>
                {masterData.map((item) => {
                  return (
                    <option value={item.isinNumber}>
                      {item.nameOfCompany}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>{reqData.assetClass}</td>
            <td>{reqData.subAssetClass}</td>
            <td>{reqData.equity}</td>
            <td>{reqData.lastPrice}</td>
            <td>
              {reqData.length >= 0 ? (
                "a"
              ) : (
                <input
                  type="number"
                  value={quantity}
                  onChange={calculateValue}
                ></input>
              )}
            </td>
            <td>{value}</td>
            <td></td>
          </tr>
        </table>
        <div className="sub">
          <button
            className="submit"
            type="submit"
            onClick={savePortfolioComposition}
          >
            SAVE
          </button>

          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PortComposition;
