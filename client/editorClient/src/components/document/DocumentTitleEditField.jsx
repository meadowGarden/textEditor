import { useForm } from "react-hook-form";
import "../../styles/ComponentDesign.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const DocumentTitleEditField = ({
  documentTitle,
  closeEditState,
  updateTitle,
}) => {
  const { documentID } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const updatedDocument = {
      title: formData.title,
    };

    axios
      .put(`http://localhost:8080/api/documents/${documentID}`, updatedDocument)
      .then(() => {
        updateTitle(formData.title);
        closeEditState();
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="documentTitleEditFieldDialog">
      <section>
        <input
          {...register("title", {
            required: true,
            minLength: 1,
            maxLength: 50,
          })}
          className="documentTitleEditField"
          type="text"
          defaultValue={documentTitle}
        />
      </section>

      <section className="documentTitleEditFieldDialogButtons">
        <button
          className="documentTitleEditFieldButtonCancel"
          onClick={() => closeEditState()}
        >
          cancel
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          className="documentTitleEditFieldButtonAccept"
        >
          accept
        </button>
      </section>
    </form>
  );
};

export default DocumentTitleEditField;
