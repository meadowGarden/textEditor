import { useState } from "react";
import "./DocumentTitleFieldEdit.css";

export default function DocumentTitleEditField({ document, setDocument }) {
  const handleChange = (event) => {
    const newDocumentTitle = event.target.value;
    setDocument((prev) => ({ ...prev, title: newDocumentTitle }));
  };

  return (
    <form className="titleContainer">
      <input
        onChange={handleChange}
        value={document?.title}
        className="titleStyle"
      />
    </form>
  );
}
