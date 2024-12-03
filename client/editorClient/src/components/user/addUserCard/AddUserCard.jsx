import { useForm } from "react-hook-form";
import axios from "axios";
import BasicButton from "../../ui/basicButton/BasicButton";
import "./AddUserCard.css";
import "../../../styles/Error.css";

function AddUserCard({ close }) {
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

    axios
      .post(`http://localhost:8080/api/users`, accountData)
      .then((response) => {
        console.log(response);
        close();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form className="addUserCard">
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
            className="cardElement"
          />
          {errors.username && (
            <div className="formFieldError">{errors.username.message}</div>
          )}
        </section>

        <section>
          <input
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
            placeholder="first name"
            className="cardElement"
          />
          {errors.firstName && (
            <div className="formFieldError">{errors.firstName.message}</div>
          )}
        </section>

        <section>
          <input
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
            placeholder="last name"
            className="cardElement"
          />
          {errors.lastName && (
            <div className="formFieldError">{errors.lastName.message}</div>
          )}
        </section>

        <section>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be at least six characters",
              },
            })}
            placeholder="password"
            className="cardElement"
          />
          {errors.password && (
            <div className="formFieldError">{errors.password.message}</div>
          )}
        </section>

        <section className="buttonMenu">
          <BasicButton label={"add"} onClick={handleSubmit(onSubmit)} />
          <BasicButton label={"cancel"} onClick={close} />
        </section>
      </form>
    </>
  );
}

export default AddUserCard;
