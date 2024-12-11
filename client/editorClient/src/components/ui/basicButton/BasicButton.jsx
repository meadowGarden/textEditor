import "./BasicButton.css";

export default function BasicButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="basicButton">
      {label}
    </button>
  );
}
