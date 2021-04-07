import React, { Component } from "react";
import "./Task11.css";

class Task11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstOpen: false,
      isSecondOpen: false,
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentDate: new Date().getDate(),
      startDate: false,
      endDate: false,
      inputStart: "Start Date",
      inputEnd: "End Date",
    };
  }

  nextMonth() {
    this.setState({
      currentMonth: this.state.currentMonth + 1,
    });
    if (this.state.currentMonth > 11) {
      this.setState({
        currentMonth: 1,

        currentYear: this.state.currentYear + 1,
      });
    }
  }
  previousMonth() {
    this.setState({
      currentMonth: this.state.currentMonth - 1,
    });
    if (this.state.currentMonth < 2) {
      this.setState({
        currentMonth: 12,
        currentYear: this.state.currentYear - 1,
      });
    }
  }
  days = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  render() {
    const { isFirstOpen } = this.state;
    const { isSecondOpen } = this.state;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let dateArray = [];
    let dateArrayEnd = [];

    let slijedeciMjesec = this.state.currentMonth + 1;
    let slijedecaGodina = this.state.currentYear;

    if (slijedeciMjesec > 12) {
      slijedeciMjesec = 1;
      slijedecaGodina = slijedecaGodina + 1;
    }
    for (
      var i = 1;
      i <= this.days(this.state.currentMonth, this.state.currentYear);
      i++
    ) {
      dateArray.push(i);
    }
    for (
      var i = 1;
      i <= this.days(this.state.currentMonth + 1, this.state.currentYear);
      i++
    ) {
      dateArrayEnd.push(i);
    }

    return (
      <div className="date-picker">
        <div className="tabs">
          <button
            onClick={() =>
              this.setState({
                isFirstOpen: !isFirstOpen,
                isSecondOpen: !isSecondOpen,
              })
            }
            type="button"
            className="start-input"
          >
            {this.state.inputStart}
          </button>
          {isFirstOpen && (
            <div className="calendar">
              <div className="calendar-nav">
                <button
                  className="left-right-button"
                  onClick={() => this.previousMonth()}
                >
                  &larr;
                </button>
                <div className="current-date">
                  {months[this.state.currentMonth - 1]}
                  {this.state.currentYear}
                </div>
              </div>
              <div className="days">
                {dateArray.map((i) => (
                  <div
                    onClick={() =>
                      this.setState({
                        startDate: i,
                        inputStart:
                          i +
                          "/" +
                          this.state.currentMonth +
                          "/" +
                          this.state.currentYear,
                      })
                    }
                    className="day"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="tabs">
          <button
            onClick={() =>
              this.setState({
                isFirstOpen: !isFirstOpen,
                isSecondOpen: !isSecondOpen,
              })
            }
            type="button"
            className="start-input"
          >
            {this.state.inputEnd}
          </button>
          {isSecondOpen && (
            <div className="calendar">
              <div className="calendar-nav">
                <div className="current-date">
                  {months[slijedeciMjesec - 1]}
                  {slijedecaGodina}
                </div>
                <button
                  className="left-right-button"
                  onClick={() => this.nextMonth()}
                >
                  &rarr;
                </button>
              </div>
              <div className="days">
                {dateArrayEnd.map((i) => (
                  <div
                    onClick={() =>
                      this.setState({
                        endDate: i,
                        inputEnd:
                          i + "/" + slijedeciMjesec + "/" + slijedecaGodina,
                      })
                    }
                    className="day"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Task11;
