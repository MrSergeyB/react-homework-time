import React from "react";

const DateTimePretty = (WrappedComponent) => {
  class NewComponent extends React.Component {
    publishTime() {
      const {date} = this.props;
      let today = new Date();
      let minetsPassedSinceUpload = ((today - new Date(date)) / 3600000) * 60;
      if (minetsPassedSinceUpload < 60) {
        return "12 минут назад";
      } else if (
        minetsPassedSinceUpload > 60 &&
        minetsPassedSinceUpload < 1440
      ) {
        return "5 часов назад";
      } else {
        return "X дней назад";
      }
    }

    render(props) {
      return <WrappedComponent date={this.publishTime()} />;
    }
  }
  return NewComponent;
};

export default DateTimePretty;
