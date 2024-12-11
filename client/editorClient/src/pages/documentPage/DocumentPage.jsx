import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataLoadignSign from "../../components/ui/dataLoadingSign/DataLoadingSign";
import DocumentMenuTab from "../../components/document/DocumentMenuTab";
import "../../styles/pageDesign.css";
import DocumentBodyField from "../../components/document/DocumentBodyField";
import DocumentTitleField from "../../components/document/DocumentTitleField";
import DocumentTitleEditField from "../../components/document/DocumentTitleFieldEdit";

export default function DocumentPage() {
  const { documentID } = useParams();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [document, setDocument] = useState();
  const [isTitleInEditMode, setIsTitleInEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents/${documentID}`)
      .then((response) => {
        setDocument(response.data);
        setIsDataLoading(false);
      })
      .catch();
  }, []);

  if (isDataLoading) {
    return <DataLoadignSign />;
  }

  const handleDocumentSave = () => {
    axios
      .put(`http://localhost:8080/api/documents/${documentID}`, document)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleDocumentDelete = () => {
    axios
      .delete(`http://localhost:8080/api/documents/${documentID}`)
      .then((response) => {
        console.log(response);
        handleReturnToList();
      })
      .catch((error) => console.log(error));
  };

  const handleReturnToList = () => {
    navigate("/documents");
  };

  const handleTitleClick = () => {
    setIsTitleInEditMode(!isTitleInEditMode);
  };

  return (
    <div className="basicPageContainer">
      <DocumentMenuTab
        handleSave={handleDocumentSave}
        handleDelete={handleDocumentDelete}
        handleReturn={handleReturnToList}
      />
      {!isTitleInEditMode ? (
        <DocumentTitleField onClick={handleTitleClick} title={document.title} />
      ) : (
        <DocumentTitleEditField document={document} setDocument={setDocument} />
      )}
      <DocumentBodyField document={document} setDocument={setDocument} />
    </div>
  );
}
