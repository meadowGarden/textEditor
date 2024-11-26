import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserListElement from "../components/user/UserListElement";
import BasicButton from "../components/BasicButton";
import "../styles/PageDesign.css";
import InModal from "../components/InModal";

const defaultPaginationSettings = {
  pageNumber: 1,
  elementCount: 10,
  firstNameContains: "",
  lastNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const addUser = () => {
    axios
      .post(`http://localhost:8080/api/users`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleAddUserButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div className="userControlPanel">
        <form className="formHeader">
          <section className="formHeaderElementUser">
            <input
              {...register("firstNameContains")}
              placeholder="first name contains"
            />
            <input
              {...register("lastNameContains")}
              placeholder="last name contains"
            />
          </section>
        </form>
        <BasicButton
          buttonLabel={"add user"}
          action={handleAddUserButtonClick}
        />
      </div>
      <div className="listOfElements">{usersToDisplay}</div>
      <div>
        <InModal>mau</InModal>
      </div>
    </>
  );
}

export default UserListPage;
