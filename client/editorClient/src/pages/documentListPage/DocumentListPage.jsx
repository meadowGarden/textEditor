import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DocumentListElement from "../../components/document/DocumentListElement";
import DataLoadignSign from "../../components/ui/dataLoadingSign/DataLoadingSign";
import DocumentPaginationMenu from "../../components/document/DocumentPaginationMenu";

const defaultPaginationSettings = {
  pageNumber: 1,
  pageSize: 10,
  titleContains: "",
  sortBy: "id",
  sortAsc: true,
};

export default function DocumentListPage() {
  const [documents, setDocuments] = useState([]);
  const [paginationData, setPaginationData] = useState();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [paginationSetting, setPaginationSettings] = useState(
    defaultPaginationSettings
  );
  const navigate = useNavigate();
  useEffect(() => {});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents`, { params: paginationSetting })
      .then((response) => {
        setPaginationData(response.data.page);
        setDocuments(response.data.content);
        setIsDataLoading(false);
      })
      .catch((error) => console.log(error));
  }, [paginationSetting]);

  console.log(paginationData);

  if (isDataLoading) {
    return <DataLoadignSign />;
  }

  const handleDocumentClick = (document) => {
    navigate(`/documents/${document?.id}`);
  };

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
      <DocumentPaginationMenu
        settings={paginationSetting}
        setSettings={setPaginationSettings}
        paginationData={paginationData}
      />
      {documentsToDisplay}
    </div>
  );
}
