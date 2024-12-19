import "./IconButton.css";

export default function IconButton({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="iconButton"
    >
      {children}
    </button>
  );
}
