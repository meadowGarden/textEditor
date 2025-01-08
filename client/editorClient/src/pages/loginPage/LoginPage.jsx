import BasicButton from "../../components/ui/basicButton/BasicButton.jsx";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "../../styles/pageDesign.css";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      password: data.password,
    };

    axios
      .post(`http://localhost:8080/api/auth/authenticate`, user)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("jwtToken", response.data.token);
          localStorage.setItem("user", response.data.token);
          navigate("/documents");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginPage">
      <form className="loginForm">
        <section className="loginFormSection">
          <label>username</label>
          <input
            {...register("username", {
              required: "username is madatory",
            })}
            placeholder="select username"
          />
          {errors.username && <div>{errors.username.message}</div>}
        </section>

        <section className="loginFormSection">
          <label>password</label>
          <input
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "enter your password",
              },
            })}
            placeholder="create password"
            type="password"
            className="formInputField"
          />
        </section>

        <section>
          <BasicButton
            label={"login"}
            onClick={handleSubmit(onSubmit)}
            type="submit"
          />
        </section>
      </form>
    </div>
  );
}
