import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserListElement from "../components/user/UserListElement";

const defaultPaginationSettings = {
  pageNumber: 1,
  elementCount: 2,
  firstNameContains: "",
  lastNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

function UserListPage() {
  const [users, setUsers] = useState([]);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginationSettings
  );

  const pageNumber = watch("pageNumber");
  const elementCount = watch("elementCount");
  const firstNameContains = watch("firstNameContains");
  const lastNameContains = watch("lastNameContains");
  const sortBy = watch("sortBy");
  const sortAsc = watch("sortAsc");

  useEffect(() => {
    setPaginationSettings((previousSettings) => ({
      ...previousSettings,
      pageNumber: pageNumber,
      elementCount: elementCount,
      firstNameContains: firstNameContains,
      lastNameContains: lastNameContains,
      sortBy: sortBy,
      sortAsc: sortAsc,
    }));
  }, [
    pageNumber,
    elementCount,
    firstNameContains,
    lastNameContains,
    sortBy,
    sortAsc,
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users`, {
        params: paginationSettings,
      })
      .then((response) => {
        setUsers(response.data.content);
      })
      .catch((error) => console.log(error));
  }, [paginationSettings, setUsers]);

  const usersToDisplay = users.map((user) => {
    return <UserListElement key={user.id} user={user} />;
  });

  return (
    <>
      <form>
        <section>
          <input
            {...register("firstNameContains")}
            placeholder="first name contains"
          />
        </section>
        <section>
          <input
            {...register("lastNameContains")}
            placeholder="first name contains"
          />
        </section>
      </form>
      {usersToDisplay}
    </>
  );
}

export default UserListPage;
