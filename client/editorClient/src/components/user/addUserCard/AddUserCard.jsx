import { useForm } from "react-hook-form";
import axios from "axios";
import BasicButton from "../../ui/basicButton/BasicButton";

function AddUserCard() {
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
              minLength: {
                value: 3,
                message: "username must be at least three characters",
              },
              maxLength: {
                value: 30,
                message: "username should not be longer than 30 characters",
              },
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
              minLength: {
                value: 1,
                message: "first name must be at least one character",
              },
              maxLength: {
                value: 50,
                message: "first name should not be longer than 50 characters",
              },
            })}
          />
          {errors.firstName && <div>{errors.firstName.message}</div>}
        </section>
        <section>
          <input
            placeholder="last name"
            {...register("lastName", {
              required: "last name is required",
              minLength: {
                value: 1,
                message: "last name must be at least one character",
              },
              maxLength: {
                value: 50,
                message: "last name should not be longer than 50 characters",
              },
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
              minLength: {
                value: 6,
                message: "password must be at least six characters",
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </section>
        <BasicButton label={"add"} onClick={handleSubmit(onSubmit)} />
      </form>
    </>
  );
}

export default AddUserCard;
