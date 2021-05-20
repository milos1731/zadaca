import React, { Component } from "react";
import "./Task14.css";
import Data from "./data.json";

class Task14 extends Component {
  render() {
    return (
      <div>
        {Data.map((a) => {
          return (
            <table>
              <tr>
                <th>{a.id}</th>
                <th>{a.Country}</th>
                <th>{a.TotalCases}</th>
                <th>{a.NewCases}</th>
                <th>{a.TotalDeaths}</th>
                <th>{a.NewDeaths}</th>
                <th>{a.TotalRecovered}}</th>
                <th>{a.NewRecovered}</th>
                <th>{a.ActiveCases}</th>
                <th>{a.Serious}</th>
                <th>{a.Tot1M}</th>
                <th>{a.TotalTests}</th>
                <th>{a.Tests1M}</th>
                <th>{a.Deaths1M}</th>
                <th>{a.Population}</th>
                <th>{a.Continent}</th>
                <th>{a.Caseevery}</th>
                <th>{a.Deathevery}</th>
                <th>{a.Testevery}</th>
                <th>{a.Newcases1M}</th>
                <th>{a.Newdeaths1M}</th>
                <th>{a.Active1M}</th>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default Task14;
