import "./DocumentListElement.css";

export default function DocumentListElement({ document, onClick }) {
  const { id, title, userID, createdAt, modifiedAt } = document;

  const createdDate = new Date(createdAt);
  const changedDate = new Date(modifiedAt);

  return (
    <div className="listElement" onClick={() => onClick(document)}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{userID}</span>
      <span>{createdDate.toLocaleDateString("lt-lt")}</span>
      {changedDate.getFullYear() >= createdDate.getFullYear() && (
        <span>{changedDate.toLocaleDateString("lt-lt")}</span>
      )}
    </div>
  );
}
