import React, {Component} from "react";
import "./Task9.css"


class DatePick extends Component {
    constructor(props){
        super(props);
        this.state = { 
            startDate: "",
            endDate: ""

         }

    }


    render() { 
        const minDate = new Date().toISOString().slice(0, 10)

        return ( 
            <div>
            <input
            className="input-field"
            type="date" id="start" name="trip-start"
                value={this.state.startDate}
                min= {minDate}

                onChange={(event) => this.setState({startDate: event.target.value})}>
            </input>
           
            <input 
            className="input-field"
            type="date" id="end" name="trip-end"
            min={this.state.startDate}
            value={this.state.endDate}
            onChange={(event) => this.setState({endDate: event.target.value})}>
            </input>

                <div className="picked-dates">
                    <div className="dates">
                        {this.state.startDate}
                    </div>
                   
                    <div className="dates">
                        {this.state.endDate}
                    </div>
             </div>
               
         
        </div>
         );
    }
}
 
export default DatePick;
