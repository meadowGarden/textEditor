import { useEffect, useState } from "react";
import DocumentBodyField from "../components/document/DocumentBodyField";
import DocumentMenuTab from "../components/document/DocumentMenuTab";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DocumentPage() {
  const { documentID } = useParams();
  const [document, setDocument] = useState();
  const [updatedDocument, setUpdatedDocument] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents/${documentID}`)
      .then((response) => {
        setDocument(response.data);
        setUpdatedDocument(response.data);
      })
      .catch((error) => console.log(error));
  }, [documentID]);

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/api/documents/${documentID}`, updatedDocument)
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

  return (
    <div className="basicPageContainer">
      <DocumentMenuTab
        document={updatedDocument}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleReturn={handleReturn}
      />
      <DocumentBodyField document={document} setDocument={setUpdatedDocument} />
    </div>
  );
}

export default DocumentPage;
