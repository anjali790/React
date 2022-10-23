// import React, { useState} from "react";
import CircleLoader from "react-spinners/CircleLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

export function Loader() {
//   let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState('aqua');

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
      {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <CircleLoader className="spinner"
        color="lightseagreen"
        // loading={loading}
        // cssOverride={override}
        size="200px"
        // width="500px"
        // height="500px"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}