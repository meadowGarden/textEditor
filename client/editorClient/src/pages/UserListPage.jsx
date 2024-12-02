import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserListElement from "../components/user/UserListElement";
import "../styles/PageDesign.css";
import BasicButton from "../components/ui/basicButton/BasicButton";
import InputModal from "../components/ui/inputModal/InputModal";
import AddUserCard from "../components/user/addUserCard/AddUserCard";

const defaultPaginationSettings = {
  pageNumber: 1,
  pageSize: 10,
  firstNameContains: "",
  lastNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [addUserModalVisible, setAddUserModalVisible] = useState(false);
  const [editUserModalVisible, editAddUserModalVisible] = useState(false);

  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginationSettings
  );

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const pageNumber = watch("pageNumber", defaultPaginationSettings.pageNumber);
  const pageSize = watch("pageSize", defaultPaginationSettings.pageSize);
  const firstNameContains = watch(
    "firstNameContains",
    defaultPaginationSettings.firstNameContains
  );
  const lastNameContains = watch(
    "lastNameContains",
    defaultPaginationSettings.lastNameContains
  );
  const sortBy = watch("sortBy", defaultPaginationSettings.sortBy);
  const sortAsc = watch("sortAsc", defaultPaginationSettings.sortAsc);

  useEffect(() => {
    setPaginationSettings((prev) => ({
      ...prev,
      pageNumber: pageNumber,
      pageSize: pageSize,
      firstNameContains: firstNameContains,
      lastNameContains: lastNameContains,
      sortBy: sortBy,
      sortAsc: sortAsc,
    }));
  }, [
    pageNumber,
    pageSize,
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

  const showAddUserModal = () => {
    setAddUserModalVisible(true);
  };

  const closeAddUserModal = () => {
    setAddUserModalVisible(false);
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
        <BasicButton label={"add user"} onClick={showAddUserModal} />
      </div>
      <div className="listOfElements">{usersToDisplay}</div>
      <div>
        <InputModal
          isVisible={addUserModalVisible}
          close={closeAddUserModal}
          title={"add user"}
        >
          <AddUserCard />
        </InputModal>
      </div>
    </>
  );
}

export default UserListPage;
