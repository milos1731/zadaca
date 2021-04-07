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
    };
  }

  nextMonth() {
    this.setState({ currentMonth: this.state.currentMonth + 1 });
    if (this.state.currentMonth > 11) {
      this.setState({
        currentMonth: 1,
        currentYear: this.state.currentYear + 1,
      });
    }
  }
  previousMonth() {
    this.setState({ currentMonth: this.state.currentMonth - 1 });
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

    console.log(this.state.startDate);

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

    for (
      var i = 1;
      i <= this.days(this.state.currentMonth, this.state.currentYear);
      i++
    ) {
      dateArray.push(i);
    }

    return (
      <div className="date-picker">
        <div className="tabs">
          <button
            onClick={() => this.setState({ isFirstOpen: !isFirstOpen })}
            type="button"
            className="start-input"
          >
            {this.state.currentDate} / {this.state.currentMonth} /
            {this.state.currentYear}
          </button>
          {isFirstOpen && (
            <div className="calendar">
              <div className="calendar-nav">
                <button onClick={() => this.previousMonth()}>&larr;</button>
                <div className="current-date">
                  {months[this.state.currentMonth - 1]} /
                  {this.state.currentYear}
                </div>
                <button onClick={() => this.nextMonth()}>&rarr;</button>
              </div>
              <div className="days">
                {dateArray.map((i) => (
                  <div
                    onClick={() => this.setState({ startDate: i })}
                    className="day"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          )}
          {this.state.startDate && (
            <p>
              {this.state.startDate} / {this.state.currentMonth} /
              {this.state.currentYear}
            </p>
          )}
        </div>

        <div className="tabs">
          <button
            onClick={() => this.setState({ isSecondOpen: !isSecondOpen })}
            type="button"
            className="start-input"
          >
            {this.state.currentDate} / {this.state.currentMonth} /
            {this.state.currentYear}
          </button>
          {isSecondOpen && (
            <div className="calendar">
              <div className="calendar-nav">
                <button onClick={() => this.previousMonth()}>&larr;</button>
                <div className="current-date">
                  {months[this.state.currentMonth - 1]} /
                  {this.state.currentYear}
                </div>
                <button onClick={() => this.nextMonth()}>&rarr;</button>
              </div>
              <div className="days">
                {dateArray.map((i) => (
                  <div
                    onClick={() => this.setState({ endDate: i })}
                    className="day"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          )}
          {this.state.endDate && (
            <p>
              {this.state.endDate} / {this.state.currentMonth} /
              {this.state.currentYear}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Task11;
