import BasicButton from "../../components/ui/basicButton/BasicButton.jsx";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password02,
    };

    axios
      .post(`http://localhost:8080/api/auth/register`, newUser)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form className="registrationForm">
      <section>
        <label>username</label>
        <input
          {...register("username", {
            required: "username is madatory",
          })}
          placeholder="select username"
        />
        {errors.username && <div>{errors.username.message}</div>}
      </section>

      <section>
        <label>first name</label>
        <input {...register("firstName")} placeholder="your first name" />
        {errors.firstName && <div>{errors.firstName.message}</div>}
      </section>

      <section>
        <label>last name</label>
        <input {...register("lastName")} placeholder="your last name" />
        {errors.lastName && <div>{errors.lastName.message}</div>}
      </section>

      <section>
        <label>password</label>
        <input
          id="password01"
          {...register("password01", {
            required: {
              value: true,
              message: "enter your password",
            },
          })}
          placeholder="create password"
          type="password"
        />
        <input
          id="password02"
          {...register("password02", {
            required: {
              value: true,
              message: "enter your chosen password",
            },
            validate: (value) => {
              if (watch("password01") !== value) {
                return "password fiels must match";
              }
            },
          })}
          placeholder="repeat password"
          type="password"
        />
        {errors.password02 && <div>{errors.password02.message}</div>}
      </section>

      <section>
        <BasicButton label={"register"} onClick={handleSubmit(onSubmit)} />
      </section>
    </form>
  );
}
