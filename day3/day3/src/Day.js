import React from "react";

export class Day extends React.Component {
  constructor(props) {
    super(props);
    this.apiKey = "4dda959d-3d91-45a1-9d12-247374814dc5";
    this.url = "https://holidayapi.com/v1/holidays";
    this.state = {
      holidays: null
    };
  }

  componentDidMount() {
    // INFO: Doing this for ease of reading
    const key = `key=${this.apiKey}`;
    const year = `year=${this.props.year}`;
    const month = `month=${this.props.month}`;
    const day = `day=${this.props.day}`;
    const country = "country=US";

    // Fetch data
    fetch(`${this.url}?${key}&${country}&${year}&${month}&${day}`)
      .then(res => res.json())
      .then(data => {
        // Set state with fetched data
        // NOTE: we have access to `this` in a lifecycle method
        setTimeout(() => {
          this.setState({
            holidays: data.holidays
          });
        }, 5000);
      });
  }

  render() {
    return (
      <>
        <p>
          {this.state.holidays
            ? `${this.state.holidays.map(h => h.name).join(", ")}.`
            : "There are no holidays."}
        </p>
      </>
    );
  }
}

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        { month: "01", day: "01", year: 2019 },
        { month: "03", day: "17", year: 2019 },
        { month: "12", day: "25", year: 2018 }
      ]
    };
  }

  render() {
    const { days } = this.state;
    return (
      <>
        {days.map(date => {
          const { year, month, day } = date;
          return <Day month={month} day={day} year={year} />;
        })}
      </>
    );
  }
}
