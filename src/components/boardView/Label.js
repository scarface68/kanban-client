import React from "react";

function Label({ due, priority, labels, colour }) {
  const colors = {
    sucess: "#04AA6D",
    danger: "#F44336",
    warning: "#FFC107",
    info: "#2196F3",
    other: "#d71b3b",
  };
  return (
    <>
      {due && (
        <div
          style={{
            color: "white",
            padding: "8px",
            fontFamily: "Arial",
            borderRadius: "18px",
            backgroundColor: colors[colour],
            margin: "2px",
            width: "fit-content",
            opacity: 0.8,
          }}
        >
          Due {due}
        </div>
      )}
      {priority && (
        <div
          style={{
            color: "white",
            padding: "8px",
            fontFamily: "Arial",
            borderRadius: "18px",
            backgroundColor: colors[colour],
            margin: "2px",
            width: "fit-content",
            opacity: 0.8,
          }}
        >
          {priority}
        </div>
      )}
      {labels &&
        labels.map((label) => (
          <div
            key={label}
            style={{
              color: "white",
              padding: "8px",
              fontFamily: "Arial",
              borderRadius: "18px",
              backgroundColor: colors[colour],
              margin: "2px",
              width: "fit-content",
              display: "inline-block",
              opacity: 0.8,
            }}
          >
            {label}
          </div>
        ))}
    </>
  );
}

export default Label;
