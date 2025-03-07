import React, { useState } from "react";

function Tes1() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)} type="button">
        +
      </button>
    </div>
  );
}

export default Tes1;
