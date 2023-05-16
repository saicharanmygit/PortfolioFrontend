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

  useEffect(() => {
    console.log(transferObject.portfolioName);
    HeaderService.fetchAllSecuritiesByPortfolioName(
      transferObject.portfolioName
    ).then((response) => {
      setCompositionData({
        data: response.data,
        loading: false,
      });
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
        console.log(response.data);
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
        <div className="box"></div>

        <div>
          {transferObject.portfolioName}

          {transferObject.themeName}
        </div>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr style={{ backgroundColor: "black", color: "white" }}>
                <th>Security Name</th>
                <th>Asset Class</th>
                <th>Sub Asset Class</th>
                <th>Equity Category</th>
                <th>Security Price</th>
                <th>Quantity</th>
                <th>value</th>
                <th>Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {/* {
                compositionData.loading?"":compositionData.data.map((item,index)=>{
                  return (<tr key={item.portfolioCompostionId}>
                      <td>{item.securityName}</td>
                      <td>{item.assetClass}</td>
                      <td>{item.subAssetClass}</td>
                      <td>{item.equityCategory}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.value}</td>
                      <td>{item.transactionDate}</td>
                  </tr>
                  )
                })
              } */}
            </tbody>
          </table>
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
                  onChange={calculateValue}></input>
              )}
            </td>
            <td>{value}</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-pen"
                viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
                margin-right="50px">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </td>
          </tr>
        </table>
        <div className="sub">
          <button
            className="submit"
            type="submit"
            onClick={savePortfolioComposition}>
            SAVE
          </button>

          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default PortComposition;
