const img_url = [
  "https://assets.codepen.io/6060109/form-stage-1.png",
  "https://assets.codepen.io/6060109/form-stage-2.png",
  "https://assets.codepen.io/6060109/form-stage-3.png",
  "https://assets.codepen.io/6060109/form-stage-4.png"
];

export default function RightImage(props) {
  if (props.stageNum === 1) {
    return (
      <div className="RightImage">
        <img src="https://assets.codepen.io/6060109/form-stage-1.png" alt="" />
      </div>
    );
  } else if (props.stageNum === 2) {
    return (
      <div className="RightImage">
        <img src="https://assets.codepen.io/6060109/form-stage-2.png" alt="" />
      </div>
    );
  } else if (props.stageNum === 3) {
    return (
      <div className="RightImage">
        <img src="https://assets.codepen.io/6060109/form-stage-3.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className="RightImage">
        <img src="https://assets.codepen.io/6060109/form-stage-4.png" alt="" />
      </div>
    );
  }
}
