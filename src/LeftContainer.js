import { useState } from "react";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const label_text = [
  "Apply to work with our agency",
  `What's your budjet?`,
  "Anything else we should know?",
  "Thank you!"
];

export default function LeftContainer(props) {
  const [email, setEmail] = useState("");
  const [buttonSelection, setButtonSelection] = useState("");
  const [details, setDetails] = useState("");

  let content;
  if (props.stageNum === 0) {
    content = (
      <TextInput placeholder="What's your email?" updateValue={setEmail} />
    );
  } else if (props.stageNum === 1) {
    content = <ButtonGroup updateValue={setButtonSelection} />;
  } else if (props.stageNum === 2) {
    content = <TextInput updateValue={setDetails} />;
  } else if (props.stageNum === 3) {
    alert(JSON.stringify({ email, buttonSelection, details }));
  }
  return (
    <div className="LeftContainer">
      <div className="TextInput">
        <h1>{label_text[props.stageNum]}</h1>
        {content}
        {props.stageNum !== 3 && (
          <input
            type="button"
            value="Next"
            className="whiteBtn"
            onClick={() => {
              props.setStageNum(props.stageNum + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
