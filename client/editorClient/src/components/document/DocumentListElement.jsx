import "../../styles/ComponentDesign.css";

const DocumentListElement = ({ document, handleClick }) => {
  const { id, title, userID, createdAt, modifiedAt } = document;

  return (
    <div className="listElementDocument" onClick={() => handleClick(document)}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{userID}</span>
      <span>{createdAt}</span>
      <span>{modifiedAt}</span>
    </div>
  );
};

export default DocumentListElement;
