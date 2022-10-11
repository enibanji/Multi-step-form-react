import { useState } from "react";
const BTN_TEXT = ["$2K", "$5K", "No Limit"];
export default function ButtonGroup({ updateValue }) {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <div className="options">
      {BTN_TEXT.map((btnText, i) => (
        <input
          type="button"
          value={btnText}
          className="transBtn "
          onClick={() => {
            setSelectedButton(i);
            updateValue(btnText);
          }}
          id={selectedButton === i ? "selectedBtn" : ""}
        />
      ))}
    </div>
  );
}
