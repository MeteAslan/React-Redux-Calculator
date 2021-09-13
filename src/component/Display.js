import { useSelector } from "react-redux";

const Display = () => {
  const { result, operation } = useSelector((state) => state.calculatorReducer);

  const styleDisplay = {
    width: "16rem",
    height: "7rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    background: "#0A100D",
    color: "#E8EDDF",
  };
  return (
    <div style={styleDisplay}>
      <h6>{operation}</h6>
      <h4>{result}</h4>
    </div>
  );
};

export default Display;
//
