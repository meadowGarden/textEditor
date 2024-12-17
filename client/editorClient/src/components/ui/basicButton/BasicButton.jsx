import "./BasicButton.css";

export default function BasicButton({ onClick, label }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="basicButton"
    >
      {label}
    </button>
  );
}
