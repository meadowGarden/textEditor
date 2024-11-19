import axios from "axios";
import { useEffect, useState } from "react";
import DocumentListElement from "../components/document/DocumentListElement";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const defaultPaginationSettings = {
  pageNumber: 1,
  elementCount: 2,
  titleContains: "",
  sortBy: "id",
  sortAsc: true,
};

function DocumentListPage() {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginationSettings
  );

  const pageNumber = watch("pageNumber");
  const elementCount = watch("elementCount");
  const titleContains = watch("titleContains");
  const sortBy = watch("sortBy");
  const sortAsc = watch("sortAsc");

  useEffect(() => {
    setPaginationSettings((previousSettings) => ({
      ...previousSettings,
      pageNumber: pageNumber,
      elementCount: elementCount,
      titleContains: titleContains,
      sortBy: sortBy,
      sortAsc: sortAsc,
    }));
  }, [pageNumber, elementCount, titleContains, sortBy, sortAsc]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/documents`, {
        params: paginationSettings,
      })
      .then((response) => {
        setDocuments(response.data.content);
      })
      .catch((error) => console.log(error));
  }, [paginationSettings, setDocuments]);

  const documentsToDisplay = documents.map((document) => {
    return (
      <DocumentListElement
        key={document.id}
        document={document}
        navigate={navigate}
      />
    );
  });

  return (
    <>
      <form>
        <section>
          <input {...register("titleContains")} placeholder="title contains" />
        </section>
      </form>

      <div>documents to display</div>
      {documentsToDisplay}
    </>
  );
}

export default DocumentListPage;
