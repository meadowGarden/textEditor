import { useForm } from "react-hook-form";
import BasicButton from "../BasicButton";
import axios from "axios";

function UserInfoCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const accountData = {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    };

    console.log(accountData);

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
            {...register("username", {
              required: "username is required",
              minLength: 1,
              maxLength: 30,
            })}
            placeholder="username"
          />
          {errors.username && <div>{errors.username.message}</div>}
        </section>

        <section>
          <input
            placeholder="first name"
            {...register("firstName", {
              required: "first name is required",
              minLength: 1,
              maxLength: 50,
            })}
          />
          {errors.firstName && <div>{errors.firstName.message}</div>}
        </section>
        <section>
          <input
            placeholder="last name"
            {...register("lastName", {
              required: "last name is required",
              minLength: 1,
              maxLength: 50,
            })}
          />
          {errors.lastName && <div>{errors.lastName.message}</div>}
        </section>
        <section>
          <input
            placeholder="password"
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: 3,
              maxLength: 50,
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </section>
        <BasicButton buttonLabel={"add"} action={handleSubmit(onSubmit)} />
      </form>
    </>
  );
}

export default UserInfoCard;
