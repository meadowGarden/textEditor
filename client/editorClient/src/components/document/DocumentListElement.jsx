import "../../styles/ComponentDesign.css";

const DocumentListElement = ({ document, handleClick }) => {
  const { id, title, userID, createdAt, modifiedAt } = document;
  
  const createdDate = new Date(createdAt);
  const changedDate = new Date(modifiedAt);



  return (
    <div className="listElementDocument" onClick={() => handleClick(document)}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{userID}</span>
      <span>{createdDate.toLocaleDateString("lt-lt")}</span>
      <span>{changedDate.toLocaleDateString("lt-lt")}</span>
    </div>
  );
};

export default DocumentListElement;
