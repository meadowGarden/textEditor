import { useEffect, useState } from "react";
import DocumentBodyField from "../components/document/DocumentBodyField";
import DocumentMenuTab from "../components/document/DocumentMenuTab";
import axios from "axios";

function DocumentPage() {
  const id = 1;
  const handleSave = () => {
    axios
      .put(`http://localhost:8080/api/documents/${id}`, {
        params: paginationSettings,
      })
      .then((response) => {
        setDocuments(response.data.content);
      })
      .catch((error) => console.log(error));
    console.log("handle save is not implemented");
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/documents/${id}`)
  //     .then((response) => {
  //       setDocuments(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // });

  return (
    <>
      <DocumentMenuTab handleSave={handleSave} />
      <DocumentBodyField document={document} />
    </>
  );
}

export default DocumentPage;
