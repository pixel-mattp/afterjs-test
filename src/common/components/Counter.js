import React from "react";
import PropTypes from "prop-types";
import { DatePicker, message, Alert } from "antd";

const Counter = ({
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
  counter,
}) => {
  const [date, setData] = React.useState(null);

  function handleChange(date) {
    setData(date);
  }

  return (
    <p>
      <div style={{ marginTop: 20 }}>
        <DatePicker onChange={handleChange} />
        <Alert
          message={`Selected Date: ${
            date ? date.format("YYYY-MM-DD") : "None"
          }`}
          type="success"
        />
      </div>
      Clicked: {counter} times <button onClick={increment}>+</button>{" "}
      <button onClick={decrement}>-</button>{" "}
      <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={() => incrementAsync()}>Increment async</button>
    </p>
  );
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
