import "./DocumentListElement.css";
import "../ui/basicButton/BasicButton.jsx";
import IconButton from "../ui/iconButton/IconButton.jsx";

export default function DocumentListElement({
  document,
  onClick,
  onDeleteClick,
}) {
  const { id, title, userID, createdAt, modifiedAt } = document;

  const createdDate = new Date(createdAt);
  const changedDate = new Date(modifiedAt);

  return (
    <div className="listElement" onClick={() => onClick(document)}>
      <span>{id}</span>
      <span>{title}</span>
      <span className="listElementID">{userID}</span>
      <span className="listElementDate">
        {createdDate.toLocaleDateString("lt-lt")}
      </span>
      {changedDate.getFullYear() >= createdDate.getFullYear() ? (
        <span className="listElementDate">
          {changedDate.toLocaleDateString("lt-lt")}
        </span>
      ) : (
        <span></span>
      )}
      <span className="listElementDeleteButton">
        <IconButton onClick={() => onDeleteClick(id)}>
          <span>delete</span>
        </IconButton>
      </span>
    </div>
  );
}
