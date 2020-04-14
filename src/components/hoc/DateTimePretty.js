import React from "react";

const DateTimePretty = (WrappedComponent) => {
  class NewComponent extends React.Component {
    render(props) {
      const {date} = this.props;
      let publishTime = null;
      let today = new Date();
      let minetsPassedSinceUpload = ((today - new Date(date)) / 3600000) * 60;
      if (minetsPassedSinceUpload < 60) {
        publishTime = "12 минут назад";
      } else if (
        minetsPassedSinceUpload > 60 &&
        minetsPassedSinceUpload < 1440
      ) {
        publishTime = "5 часов назад";
      } else {
        publishTime = "X дней назад";
      }

      return <WrappedComponent date={publishTime} />;
    }
  }
  return NewComponent;
};

export default DateTimePretty;
