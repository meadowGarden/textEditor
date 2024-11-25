import axios from "axios";
import { useEffect, useState } from "react";
import DocumentListElement from "../components/document/DocumentListElement";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/PageDesign.css";

const defaultPaginationSettings = {
  pageNumber: 1,
  pageSize: 10,
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
  const pageSize = watch("pageSize");
  const titleContains = watch("titleContains");
  const sortBy = watch("sortBy");
  const sortAsc = watch("sortAsc");

  useEffect(() => {
    setPaginationSettings((previousSettings) => ({
      ...previousSettings,
      pageNumber: pageNumber,
      pageSize: pageSize,
      titleContains: titleContains,
      sortBy: sortBy,
      sortAsc: sortAsc,
    }));
  }, [pageNumber, pageSize, titleContains, sortBy, sortAsc]);

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

  const handleClick = (document) => {
    const id = document.id;
    navigate(`/documents/${id}`);
  };

  const documentsToDisplay = documents.map((document) => {
    return (
      <DocumentListElement
        key={document.id}
        document={document}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <form className="formHeaderDocument">
        <section className="formHeaderElement">
          <input {...register("titleContains")} placeholder="title contains" />
          <input {...register("pageNumber")} placeholder="page number" />
          <input {...register("pageSize")} placeholder="page size" />
        </section>
      </form>
      <div className="listOfElements">
        <div className="listOfElementsHeader">
          <span className="headerElement">id</span>
          <span className="headerElement">title</span>
          <span className="headerElement">user id</span>
          <span className="headerElement">created at</span>
          <span className="headerElement">changed at</span>
        </div>
      </div>
      <div className="listOfElements">{documentsToDisplay}</div>
    </>
  );
}

export default DocumentListPage;
