import { useForm } from "react-hook-form";
import BasicButton from "../../ui/basicButton/BasicButton";

const EditUserCard = ({
  user,
  onUpdateUserClick,
  onCancelClick,
  onSuccesfullEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: user });

  const onSubmit = (formData) => {
    const updatedUser = {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    onUpdateUserClick(user.id, updatedUser);
    onSuccesfullEdit();
  };

  return (
    <>
      <form>
        <section>
          <label>username</label>
          <input {...register("username")} type="text" />
        </section>

        <section>
          <label>fist name</label>
          <input {...register("firstName")} type="text" />
        </section>

        <section>
          <label>last name</label>
          <input {...register("lastName")} type="text" />
        </section>
      </form>
      <BasicButton onClick={handleSubmit(onSubmit)} label={"update"} />
      <BasicButton onClick={onCancelClick} label={"cancel"} />
    </>
  );
};

export default EditUserCard;
