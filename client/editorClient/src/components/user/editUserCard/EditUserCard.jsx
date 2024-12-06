import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BasicButton from "../../ui/basicButton/BasicButton";

const EditUserCard = ({ user, updateUser }) => {
  const [userData, setUserData] = useState(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${user?.id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.log(error));
  }, [user]);

  const onSubmit = (formData) => {
    const updatedUser = {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    updateUser(userData.id, updatedUser);
  };

  return (
    <>
      <form>
        <section>
          <label>username</label>
          <input
            {...register("username")}
            defaultValue={userData?.username}
            type="text"
          />
        </section>

        <section>
          <label>fist name</label>
          <input
            {...register("firstName")}
            defaultValue={userData?.firstName}
            type="text"
          />
        </section>

        <section>
          <label>last name</label>
          <input
            {...register("lastName")}
            defaultValue={userData?.lastName}
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
