import { useEffect, useState } from "react";
import DocumentBodyField from "../components/document/DocumentBodyField";
import DocumentMenuTab from "../components/document/DocumentMenuTab";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DocumentTitleField from "../components/document/DocumentTitleField";
import DocumentTitleEditField from "../components/document/DocumentTitleEditField";

function DocumentPage() {
  const { documentID } = useParams();
  const [document, setDocument] = useState();
  const [editState, setEditState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents/${documentID}`)
      .then((response) => {
        setDocument(response.data);
      })
      .catch((error) => console.log(error));
  }, [documentID]);

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/api/documents/${documentID}`, document)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/documents/${documentID}`)
      .then(() => navigate(`/documents`))
      .catch((error) => console.log(error));
  };

  const handleReturn = () => {
    console.log("returning");
    navigate(`/documents`);
  };

  const openEditState = () => {
    setEditState(true);
  };

  const closeEditState = () => {
    setEditState(false);
  };

  const updateTitle = (newTitle) => {
    setDocument((prev) => ({ ...prev, title: newTitle }));
  };

  return (
    <div className="basicPageContainer">
      <DocumentMenuTab
        document={document}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleReturn={handleReturn}
      />
      {!editState ? (
        <DocumentTitleField
          handleClick={openEditState}
          documentTitle={document?.title}
        />
      ) : (
        <DocumentTitleEditField
          closeEditState={closeEditState}
          documentTitle={document?.title}
          updateTitle={updateTitle}
        />
      )}
      <DocumentBodyField document={document} setDocument={setDocument} />
    </div>
  );
}

export default DocumentPage;
