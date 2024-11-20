import { useForm } from "react-hook-form";
import "./DocumentBodyField.css";

const DocumentBodyField = ({ documentBody }) => {
  const { register } = useForm();

  const documentSymbols = documentBody?.split();
  const textToDisplay = documentSymbols?.map((char) => {
    return <span key={char}>{char}</span>;
  });

  return (
    <>
      <form className="documentBodyField">
        <input
          className="editorTextArea"
          type="textarea"
          {...register("documentBody")}
          rows={10}
          placeholder={documentBody}
        />
        {textToDisplay}
      </form>
    </>
  );
};

export default DocumentBodyField;
