import React from "react";

function Tes3() {
  const [current, setCurrent] = React.useState(0);

  const contents = [<div>Tab Content 1</div>, <div>Tab Content 2</div>];

  return (
    <div>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={() => setCurrent(0)}
          style={{
            color: current === 0 ? "lightblue" : "black",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "transparent",
          }}
        >
          Tab 1
        </button>
        <button
          style={{
            color: current === 1 ? "lightblue" : "black",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "transparent",
          }}
          type="button"
          onClick={() => setCurrent(1)}
        >
          Tab 2
        </button>
      </div>

      <div>{contents[current]}</div>
    </div>
  );
}

export default Tes3;
