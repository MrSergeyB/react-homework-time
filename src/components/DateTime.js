import React from "react";
import DateTimePretty from "../components/hoc/DateTimePretty";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

export default DateTimePretty(DateTime);
