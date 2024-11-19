import { useForm } from "react-hook-form";
import "./DocumentBodyField.css";

const DocumentBodyField = ({ document }) => {
  const { register } = useForm();

  return (
    <form className="documentBodyField">
      <input
        className="editorTextArea"
        type="textarea"
        {...register("documentBody")}
        rows={10}
      />
    </form>
  );
};

export default DocumentBodyField;
