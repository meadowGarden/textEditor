const DocumentListElement = ({ document, handleClick }) => {

  const {id, title, userID, createdAt, modifiedAt} = document;

  return (
    <div className="documentListElement" onClick={() => handleClick(document)}>
      {id} {title} {userID} {createdAt} {modifiedAt}
    </div>
  );
};

export default DocumentListElement;
