import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/calculatorActions";

const Operation = () => {
  const dispatch = useDispatch();

  const operation = useSelector((state) => state.calculatorReducer.operation);

  const handleClick = (event) => {
    if (operation.length < 21) {
      dispatch(actions.setOperation(event.target.name));
    }
  };

  const content = [
    "C",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "←",
    "=",
  ];

  const styleOperation = {
    width: "16rem",
    height: "15rem",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "0.2rem",
    background: "#333533",
    // marginTop: "0.5rem",
  };

  const styleButton = {
    outline: "none",
    boxShadow: "none",
    borderRadius: "0",
    border: "none",
  };

  const styleClearButton = {
    gridColumn: "span 3",
    background: "#818363",
    ...styleButton,
  };

  const styleZeroButton = {
    gridColumn: "span 2",
    background: "#53687e",
    ...styleButton,
  };

  const styleEqualButton = {
    background: "#0f50b3",
    ...styleButton,
  };

  const styleDelete = {
    background: "#bf6703",
    ...styleButton,
  };

  const styleNumPad = {
    background: "#53687e",
    ...styleButton,
  };

  const styleOperators = {
    background: "#902923",

    ...styleButton,
  };

  return (
    <div style={styleOperation}>
      {content.map((item, index) => {
        switch (item) {
          case "C":
            return (
              <Button
                name={item}
                key={index}
                style={styleClearButton}
                onClick={() => dispatch(actions.clear())}
              >
                {item}
              </Button>
            );

          case "0":
            return (
              <Button
                name={item}
                key={index}
                style={styleZeroButton}
                onClick={handleClick}
              >
                {item}
              </Button>
            );

          case "=":
            return (
              <Button
                name={item}
                key={index}
                style={styleEqualButton}
                onClick={() =>
                  operation !== ""
                    ? dispatch(actions.setEqual(operation))
                    : false
                }
              >
                {item}
              </Button>
            );

          case "←":
            return (
              <Button
                name={item}
                key={index}
                style={styleDelete}
                onClick={() => dispatch(actions.wipe())}
              >
                {item}
              </Button>
            );

          case "*":
          case "/":
          case "+":
          case "-":
            return (
              <Button
                name={item}
                key={index}
                style={styleOperators}
                onClick={handleClick}
              >
                {item}
              </Button>
            );

          default:
            return (
              <Button
                name={item}
                key={index}
                style={styleNumPad}
                onClick={handleClick}
              >
                {item}
              </Button>
            );
        }
      })}
    </div>
  );
};

export default Operation;
