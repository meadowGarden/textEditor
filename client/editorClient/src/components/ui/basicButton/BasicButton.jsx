import "./BasicButton.css";

export default function BasicButton({ onClick, label, type = "button" }) {
  return (
    <button
      type={type}
      onClick={(e) => {
        if (type !== "submit") e.stopPropagation();
        onClick(e);
      }}
      className="basicButton"
    >
      {label}
    </button>
  );
}
