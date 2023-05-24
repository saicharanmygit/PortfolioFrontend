import React from "react";
import HeaderService from "../../services/HeaderService";
import './ViewTheme.css';
import { useState } from "react";
import { useEffect } from "react";
const ViewTheme = () => {
  const [themeData, setThemeData] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    HeaderService.getData()
      .then((response) => {
        //console.log(response)
        setThemeData({
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="total">
      <div className="container table-center">
        <table className="view">
          <thead>
            <tr>
               <th>Theme Name</th>
               <th>Investment Horizon</th>
              <th>Risk</th>
               <th>Commodities</th>
               <th>Equities</th>
              <th>Bonds</th>
               <th> edit</th>
            </tr>
          </thead>
          <tbody>
            {themeData.loading
              ? ""
              : themeData.data.map((item, index) => {
                  return (
                    <tr key={item.themeName}>
                      <td>{item.themeName}</td>
                      <td>{item.investmentHorizon}</td>
                       <td>{item.risk}</td>
                      <td>{item.commodities}</td>
                       <td>{item.equities}</td>
                      <td>{item.bonds}</td>

                      <td>
                        <div className="action-buttons">
                          <button class="edit-btn"> +</button>
                          <button class="delete-btn">-</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTheme;
