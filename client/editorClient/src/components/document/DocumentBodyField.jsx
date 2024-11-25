import { useForm } from "react-hook-form";
import "../../styles/ComponentDesign.css";

const DocumentBodyField = ({ documentBody }) => {
  const { register } = useForm();

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
      </form>
    </>
  );
};

export default DocumentBodyField;
