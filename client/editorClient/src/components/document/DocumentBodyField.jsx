import { useState } from "react";
import "./DocumentBodyField.css";

export default function DocumentBodyField({ document, setDocument }) {
  const [documentBody, setDocumentBody] = useState(document?.body);

  const handleChange = (event) => {
    const newDocumentBody = event.target.value;
    setDocumentBody(newDocumentBody);
    setDocument((prev) => ({ ...prev, body: newDocumentBody }));
  };

  return (
    <form className="documentContainer">
      <textarea
        className="textEditor"
        defaultValue={documentBody}
        onChange={handleChange}
        rows={30}
      />
    </form>
  );
}
