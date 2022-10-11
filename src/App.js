import { useState } from "react";
import "./styles.css";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";

export default function App() {
  const [stageNum, setStageNum] = useState(0);
  return (
    <div className="App">
      <LeftContainer stageNum={stageNum} setStageNum={setStageNum} />
      <RightImage stageNum={stageNum} setStageNum={setStageNum} />
    </div>
  );
}
