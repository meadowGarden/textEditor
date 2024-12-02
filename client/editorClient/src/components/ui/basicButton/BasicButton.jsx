import "./BasicButton.css";

function BasicButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="basicButton">
      {label}
    </button>
  );
}

export default BasicButton;
