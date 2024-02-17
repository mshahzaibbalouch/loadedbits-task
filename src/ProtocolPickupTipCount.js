import React, { useEffect, useState } from "react";

const ProtocolPickupTipCount = ({ log }) => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    calculateCounts();
  }, [log]);

  const calculateCounts = () => {
    const lines = log.split("\n");
    let counts = [];
    let currentProtocol = null;
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes("run")) {
        if (currentProtocol !== null) {
          counts.push({ protocol: currentProtocol, count: count });
        }
        currentProtocol = line.split('"')[1];
        count = 0;
      } else if (line.includes("done")) {
        counts.push({ protocol: currentProtocol, count: count });
        currentProtocol = null;
        count = 0;
      } else if (line.includes("pickuptip")) {
        count++;
      }
    }

    // Push the last count if a protocol was not marked done before the end of the log
    if (currentProtocol !== null) {
      counts.push({ protocol: currentProtocol, count: count });
    }

    console.log(counts);

    setCounts(counts);
  };

  return (
    <div className="container my-2 col-4">
      <h2>Pickup Tip Counts</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Protocol</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {counts.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.protocol}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtocolPickupTipCount;
