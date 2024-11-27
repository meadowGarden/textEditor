import { useForm } from "react-hook-form";
import BasicButton from "../BasicButton";
import axios from "axios";

function UserInfoCard() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const accountData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    };

    axios
      .post(`http://localhost:8080/api/users`, accountData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form>
        <section>
          <input
            placeholder="first name"
            {...register("firstName", {
              required: true,
              minLength: 1,
              maxLength: 50,
            })}
          />
        </section>
        <section>
          <input
            placeholder="last name"
            {...register("lastName", {
              required: true,
              minLength: 1,
              maxLength: 50,
            })}
          />
        </section>
        <section>
          <input
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
        </section>
        <BasicButton buttonLabel={"add"} action={handleSubmit(onSubmit)} />
      </form>
    </>
  );
}

export default UserInfoCard;
