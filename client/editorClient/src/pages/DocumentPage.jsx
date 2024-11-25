import { useEffect, useState } from "react";
import DocumentBodyField from "../components/document/DocumentBodyField";
import DocumentMenuTab from "../components/document/DocumentMenuTab";
import axios from "axios";
import { useParams } from "react-router-dom";

function DocumentPage() {
  const { documentID } = useParams();
  const [document, setDocument] = useState();
  const title = document?.title;
  const userID = document?.userID;
  const createdAt = document?.createdAt;
  const modifiedAt = document?.modifiedAt;
  const [documentBody, setDocumentBody] = useState(document?.body);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents/${documentID}`)
      .then((response) => {
        setDocument(response.data);
        setDocumentBody(response.data.body);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/api/documents/${documentID}`, document)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <DocumentMenuTab documentBody={documentBody} handleSave={handleSave} />
      <DocumentBodyField documentBody={documentBody} />
    </>
  );
}

export default DocumentPage;
