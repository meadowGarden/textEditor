import "./ListButton.css";

const ListButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="listButton">
      {label}
    </button>
  );
};

export default ListButton;
