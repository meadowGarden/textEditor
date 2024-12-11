import { useState } from "react";
import "./DocumentBodyField.css";

export default function DocumentBodyField({ document, setDocument }) {
  const handleChange = (event) => {
    const newDocumentBody = event.target.value;
    setDocument((prev) => ({ ...prev, body: newDocumentBody }));
  };

  return (
    <form className="documentContainer">
      <textarea
        className="textEditor"
        value={document.body}
        onChange={handleChange}
        rows={30}
      />
    </form>
  );
}
