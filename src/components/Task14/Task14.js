import React, { Component } from "react";
import "./Task14.css";
import Data from "./data.json";

class Task14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: Data,
      sortedField: null,
    };
  }

  render() {
    const { sortedField } = this.state;

    console.log(this.state.sortedField);
    let sorted = [...this.state.countryData];
    if (sortedField !== null) {
      sorted.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }

    return (
      <div>
        <table>
          <caption>Corona virus list</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>
                <button
                  className="btn-sort"
                  type="button"
                  onClick={() => this.setState({ sortedField: "Country" })}
                >
                  Country
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "TotalCases" })}
                >
                  TotalCases
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "NewCases" })}
                >
                  NewCases
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "TotalDeaths" })}
                >
                  TotalDeaths
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "NewDeaths" })}
                >
                  NewDeaths
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() =>
                    this.setState({ sortedField: "TotalRecovered" })
                  }
                >
                  Recovered
                </button>
              </th>
              {/* <th>NewRecovered</th> */}
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "ActiveCases" })}
                >
                  ActiveCases
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "Serious" })}
                >
                  Serious
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "Tot1M" })}
                >
                  Tot1M
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "Deaths1M" })}
                >
                  Deaths1M
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "TotalTests" })}
                >
                  TotalTests
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "Tests1M" })}
                >
                  Tests1M
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn-sort"
                  onClick={() => this.setState({ sortedField: "Population" })}
                >
                  Population
                </button>
              </th>
              {/* <th>Continent</th>
                <th>Caseevery</th>
                <th>Deathevery</th>
                <th>Testevery</th>
                <th>Newcases1M</th>
                <th>Newdeaths1M</th>
                <th>Active1M</th> */}
            </tr>
          </thead>
          <tbody>
            {sorted.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.Country}</td>
                <td>{a.TotalCases}</td>
                <td>{a.NewCases}</td>
                <td>{a.TotalDeaths}</td>
                <td>{a.NewDeaths}</td>
                <td>{a.TotalRecovered}</td>
                {/* <td>{a.NewRecovered}</td> */}
                <td>{a.ActiveCases}</td>
                <td>{a.Serious}</td>
                <td>{a.Tot1M}</td>
                <td>{a.TotalTests}</td>
                <td>{a.Tests1M}</td>
                <td>{a.Deaths1M}</td>
                <td>{a.Population}</td>
                {/* <td>{a.Continent}</td>
                  <td>{a.Caseevery}</td>
                  <td>{a.Deathevery}</td>
                  <td>{a.Testevery}</td>
                  <td>{a.Newcases1M}</td>
                  <td>{a.Newdeaths1M}</td>
                  <td>{a.Active1M}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Task14;
