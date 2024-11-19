const DocumentListElement = ({ document, navigate }) => {
  const { id, title, userID, createdAt, modifiedAt } = document;

  return (
    <div
      className="documentListElement"
      onClick={() => navigate(`/documents/${id}`)}
    >
      {id} {title} {userID} {createdAt} {modifiedAt}
    </div>
  );
};

export default DocumentListElement;
