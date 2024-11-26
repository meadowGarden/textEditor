import { useForm } from "react-hook-form";
import "../../styles/ComponentDesign.css";
import { useEffect, useState } from "react";

const DocumentBodyField = ({ document, setDocument }) => {
  const [documentBody, setDocumentBody] = useState(document?.body);
  useEffect(() => {
    setDocumentBody(document?.body);
  }, [document]);

  const handleChange = (event) => {
    const newBody = event.target.value;
    setDocumentBody(newBody);
    setDocument((prev) => ({
      ...prev,
      body: newBody,
    }));
  };

  return (
    <form id="documentBodyForm" className="documentBodyField">
      <textarea
        defaultValue={documentBody}
        rows={30}
        onChange={handleChange}
        className="editorTextArea"
      />
    </form>
  );
};

export default DocumentBodyField;
