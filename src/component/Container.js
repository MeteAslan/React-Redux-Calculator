import Display from "./Display";
import Operation from "./Operation";

const Container = () => {
  const styleContainer = {
    height: "80vh",
    display: "flex",
    flexDirection: "column ",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styleContainer}>
      <h3
        style={{ textAlign: "center", marginBottom: "2rem", color: "#0d1321" }}
      >
        React Redux Calculator
      </h3>
      <Display />
      <Operation />
    </div>
  );
};

export default Container;
