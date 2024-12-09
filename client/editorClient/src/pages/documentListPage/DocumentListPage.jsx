import axios from "axios";
import { useEffect, useState } from "react";
import DocumentListElement from "../../components/document/DocumentListElement";

const defaultPaginationSettings = {
  pageNumber: 1,
  pageSize: 10,
  titleContains: "",
  sortBy: "id",
  sortAsc: true,
};

export default function DocumentListPage() {
  const [documents, setDocuments] = useState([]);
  const [paginationSetting, setPaginationSettings] = useState(
    defaultPaginationSettings
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents`, { params: paginationSetting })
      .then((response) => {
        setDocuments(response.data.content);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDocumentClick = () => {};

  const documentsToDisplay = documents.map((document) => (
    <DocumentListElement
      key={document.id}
      document={document}
      onClick={handleDocumentClick}
    />
  ));

  return (
    <div className="basicPageContainer">
      <div>document list</div>
      {documentsToDisplay}
    </div>
  );
}
