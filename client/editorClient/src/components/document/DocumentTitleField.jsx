import EditButton from "../EditButton";
import "../../styles/ComponentDesign.css";

const DocumentTitleField = ({ handleClick, documentTitle }) => {
  return (
    <div className="documentTitleField" onClick={handleClick}>
      {documentTitle}
    </div>
  );
};

export default DocumentTitleField;
