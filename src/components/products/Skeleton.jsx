import React from "react";

const Skeleton = () => {
  return (
    <div className="wrapper">
      {Array(10)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="skeleton">
            <div></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
