import { useCallback, useState } from "react";
import "./DocumentBodyField.css";
import sanitizeHtml from "sanitize-html";

export default function DocumentBodyField({ document, setDocument }) {
  const onContentChange = useCallback((e) => {
    const sanitizeConfig = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    const newDocumentBody = e.currentTarget.innerHTML;
    setDocument((prev) => ({ ...prev, body: newDocumentBody }), sanitizeConfig);
  }, []);

  return (
    <div
      contentEditable={true}
      onChange={onContentChange}
      onBlur={onContentChange}
      dangerouslySetInnerHTML={{ __html: document.body }}
      className="docContainer"
    />
  );
}
