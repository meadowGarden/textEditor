import { useForm } from "react-hook-form";
import "./testStyles.css";

const TestPage01 = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "mau@mail.org",
      password: "passwordino",
    },
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "this email is already taken",
      });
      setError("root", { message: "the most bigestest problem" });
    }
  };

  return (
    <form>
      <input
        {...register("email", {
          required: "email is required",
          // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          // validate: (value) => value.includes("@"),
          validate: (value) => {
            if (!value.includes("@")) {
              return "emai must contain @";
            }
            return true; // string grąžiname tik kai sąlyga yra false, kitap turi likti boolean
          },
        })}
        type="text"
        placeholder="email"
      />
      {errors.email && <div className="styleError">{errors.email.message}</div>}

      <input
        {...register("password", {
          required: "password is required",
          // minLength: (8),
          minLength: {
            value: 8,
            message: "password must have at least 8 characters",
          },
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && (
        <div className="styleError">{errors.password.message}</div>
      )}

      <button
        disabled={isSubmitting}
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        {isSubmitting ? "laoding" : "submit"}
      </button>
      {errors.root && <div className="styleError">{errors.root.message}</div>}
    </form>
  );
};

export default TestPage01;
