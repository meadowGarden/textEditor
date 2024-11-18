import { useForm } from "react-hook-form";
import "./DocumentBodyField.css";

function DocumentBodyField() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>document body field</div>
      <form className="documentBodyField" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="editorTextArea"
          type="textarea"
          {...register("documentBody")}
          rows={10}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default DocumentBodyField;
