import React, { useEffect, useState } from "react"
import "./PortComposition.css";
import Navbar from "../Navbar/Navbar";
import HeaderService from "../../services/HeaderService";
const PortComposition = () => {

  const [masterData,setMasterData] = useState([]);
  const [isinNumber,setIsinNumber] = useState();
  const [reqData,setReqData]=useState("");
  const [quantity,setQuantity] = useState();
  const [value,setValue] = useState();

  useEffect(()=>{
    HeaderService.fetchData().then((response)=>{
      setMasterData(response.data);
      
    
    }).catch((error)=>{console.log(error)})

  },[])
  const handleChange=(e)=>{
    setIsinNumber(e.target.value);
    HeaderService.fetchByIsNumber(e.target.value).then((response)=>{
      setReqData(response.data);
    }).catch((error)=>{console.log(error)})

    console.log(e.target.value);
  }
  const calculateValue=(e)=>{
    setQuantity(e.target.value)
    setValue((e.target.value)*reqData.lastPrice);

  }

  //console.log(masterData);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="c1">
        <h1>Portfolio Composition</h1>
        <div className="c2">
          <label className="l1">Test</label>
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
            <select value={isinNumber} onChange={handleChange} >
            <option value="" >Select the Company</option>
              {masterData.map((item)=>{
                return <option value={item.isinNumber} >{item.nameOfCompany}</option>
              })}
            </select>
            </td>
            <td>{reqData.assetClass}</td>
            <td>{reqData.subAssetClass}</td>
            <td>{reqData.equity}</td>
            <td>{reqData.lastPrice}</td>
            <td>{reqData.length>=0?  "a": <input type="number" value={quantity} onChange={calculateValue}></input> }</td>
            <td>{value}</td>
            <td></td>
          </tr>
      
        </table>
        <div className="sub">
          <button className="submit" type="submit">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortComposition;
