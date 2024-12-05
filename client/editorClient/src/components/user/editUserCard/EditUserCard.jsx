import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BasicButton from "../../ui/basicButton/BasicButton";

const EditUserCard = ({ userID }) => {
  const [user, setUser] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userID}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (formData) => {
    const updatedUser = {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    axios
      .put(`http://localhost:8080/api/users/${userID}`, updatedUser)
      .then((response) => {
        console.log(response);
        setUser(updatedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form>
        <section>
          <label>username</label>
          <input
            {...register("username")}
            defaultValue={user?.username}
            type="text"
          />
        </section>

        <section>
          <label>fist name</label>
          <input
            {...register("firstName")}
            defaultValue={user?.firstName}
            type="text"
          />
        </section>

        <section>
          <label>last name</label>
          <input
            {...register("lastName")}
            defaultValue={user?.lastName}
            type="text"
          />
        </section>
      </form>
      <BasicButton onClick={handleSubmit(onSubmit)} label={"update"} />
      <BasicButton label={"cancel"} />
    </>
  );
};

export default EditUserCard;
